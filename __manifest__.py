# -*- coding: utf-8 -*-
{
	'name': 'Victorial Service Management',
	'version': '1.0',
	'category': 'Vectorial/Services',
	'summary': 'Manage services, tasks, and sales orders in Vectorial.',
	'description': """
        This module provides:
        - Integration of services with sales orders
        - Management of employee attendance
        - Task tracking using a to-do list feature
    """,
	'depends': ['base', 'contacts', 'sale_management', 'hr', 'web', 'sale'],
	'data': [
		'security/ir.model.access.csv',
		'views/sale_order.xml',
		'views/service.xml',
		'views/attendance_employee_views.xml',
		'views/todo_lisst.xml',
		'views/res_partner.xml',
		'views/main.xml',
	],
	'assets': {
		'web.assets_backend': [
			'/vectorial/static/src/components/todo_list.js',
			'/vectorial/static/src/components/todo_list.xml',
			'/vectorial/static/src/components/todo_list.scss',
			'/vectorial/static/src/components/valid_email_field.js',
			'/vectorial/static/src/components/valid_email_field.xml',
			#	'/vectorial/static/src/components/res_partner_list_view.js',
			#	'/vectorial/static/src/components/res_partner_list_view.xml',
		
		],
	},
	
	'license': 'LGPL-3',
}
