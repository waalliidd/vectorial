/** @odoo-module **/


import {Component, onWillStart, useState, useRef} from "@odoo/owl";

export class Product extends Component{
      setup() {
         super.setup()
         console.log("")

      }
      delProduct(ev){
      ev.stopPropagation()
         this.props.onDelete(ev, this.props.product.id)
      }
}
Product.template = "owl_product_list.Product"