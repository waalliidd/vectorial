/** @odoo-module **/
import { registry } from "@web/core/registry";
import { Component, useState } from "@odoo/owl";

export class OwlTodoList extends Component {
    setup() {
        this.state = useState({ value: 1 });
    }
}

OwlTodoList.template = "owl.TodoList"  // Template name must match the t-name in XML

// Register the action
registry.category('actions').add('owl.action_owl_todo_list_js', OwlTodoList);
