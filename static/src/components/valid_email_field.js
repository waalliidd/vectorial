/** @odoo-module **/
import { registry } from "@web/core/registry"
import { EmailField } from "@web/views/fields/email/email_field"
class ValidEmailField extends EmailField {
     setup(){
     super.setup()
     console.log('dddddddddd')

     }

     }
ValidEmailField.template  = "owl.ValidEmailField"
ValidEmailField.supportedTypes  = ["char"]
registry.category("fields").add("valid_email", ValidEmailField)