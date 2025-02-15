# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
	'name': 'VictorialService',
	'version': '1.0',
	'category': 'Vectorial/Vectorial',
	'summary': '',
	'depends': ['contacts', 'sale_management', 'hr', 'web', 'website', 'sale'],
	'data': [
		'security/ir.model.access.csv',
		'views/sale_order.xml',
		'views/service.xml',
		'views/attendance_employee_views.xml',
		'views/main.xml',
		'views/todo_lidt.xml',
	
	],
	'assets': {
		'web.assets_backend': [
		#	'vectorial/static/src/components/product.js',
		#	'vectorial/static/src/components/product_list.js',
		#	'vectorial/static/src/components/product.xml',
		#	'vectorial/static/src/components/product_list.xml',
		#	'vectorial/static/src/components/product_list.scss',
		],
	},
	
	'license': 'LGPL-3',
}
