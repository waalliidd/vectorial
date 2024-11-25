from odoo import api, fields, models, _

class SaleOrder(models.Model):
    _inherit = 'sale.order'  

    custom_field = fields.Char(string='Custom Field')


class ResConfigSettings(models.TransientModel):
    _inherit = 'res.config.settings'

    sale_header_name = fields.Char(string="Sale Header Name")
