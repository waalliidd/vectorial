from odoo import api, fields, models, _


class MyClass(models.Model):
    _name = "service.service"
    _log_access = False
    
    name = fields.Char("Name")
    description = fields.Text(string='Description')

