from odoo import api, fields, models, _

class ResPartner(models.Model):
    _inherit = 'res.partner'

    is_employee = fields.Boolean(string="Is Employee", default=True)

class AttendanceEmployee(models.Model):
    _name = "attendance.employee"
    _description = 'Employee Attendance'

    employee_id = fields.Many2one('res.partner', string="Employee", domain=[('is_employee', '=', True)],
                                  required=True)
    check_in = fields.Datetime(string="Check-In", default=lambda self: fields.Datetime.now(), required=True)
    check_out = fields.Datetime(string="Check-Out")
    duration = fields.Float(string="Duration (Hours)", compute='_compute_duration', store=True)

    @api.depends('check_in', 'check_out')
    def _compute_duration(self):
        for record in self:
            if record.check_in and record.check_out:
                duration = (record.check_out - record.check_in).total_seconds() / 3600
                record.duration = round(duration, 2)
            else:
                record.duration = 0.0
