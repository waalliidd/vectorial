/** @odoo-module **/
import { registry } from "@web/core/registry";
const  { Component, useState, onWillStart, useRef } = owl;
import {useService } from "@web/core/utils/hooks";

export class OwlTodoList extends Component {
    setup() {
       this.state = useState({
              task: {name: "", color: "#FF0000", completed:false},
              taskList: [],
              isEdit: false,
              activeId : false,
         })
         this.orm = useService("orm")
              this.model = "owl.todo.list"
                  this.searchInput = useRef("search-input")

         onWillStart(async ()=>{
              await this.getAllTasks()
          })

    }
    async getAllTasks(){
    this.state.taskList = await this.orm.searchRead( this.model, [], ["name", "color", "completed"])

    }
    addTask(){
        this.resetForm()
           this.activeId = false
               this.state.isEdite = false

    }
    editTask(task){
    this.activeId = task.id
       this.state.isEdite =  true
          this.state.task = {...task }

    }
    async saveTask(){
          if (!this.state.isEdite){
             await this.orm.create(this.model, [this.state.task])
          } else {
               await this.orm.write(this.model, [this.state.activeId], this.state.task)
          }
          await this.getAllTasks()
    }
    resetForm(){
        this.state.task = {name:"", color:"#FF0000", completed:false}


    }
   async deleteTask(task){
   await this.orm.unlink(this.model, [task.id])
       await this.getAllTasks()
   }
    async searchTasks(){
    const text = this.searchInput.el.value
       this.state.taskList = await this.orm.searchRead( this.model,[['name', 'ilike', text ]], ["name", "color",
       "completed"])

       }
       async toggleTask(e, task){
             await this.orm.write(this.model, [task.id], {completed: e.target.checked})
             await this.getAllTasks()
        }
       async updateColor(e, task){
              await this.orm.write(this.model, [task.id], {color: e.target.value})
              await this.getAllTasks()
       }
}

OwlTodoList.template = "owl.TodoList"
registry.category('actions').add('owl.action_owl_todo_list_js', OwlTodoList);
