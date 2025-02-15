from odoo import api, fields, models, _

class TodoList(models.Model):
	_name = 'owl.todo.list'
	_description = 'OWL Todo App'
	name = fields.Char(requered=True)
	completed = fields.Boolean()
	color = fields.Char()
