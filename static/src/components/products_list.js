/** @odoo-module **/
import {registry} from "@web/core/registry";
import {useService} from "@web/core/utils/hooks";
import {Component, onWillStart, useState, useRef} from "@odoo/owl";
import {Product} from "./product";


console.log("Owl Product List loaded ...")
export class ProductList extends Component {
     setup() {
     super.setup()
     console.log("hello from product-list setup ")
     this.next_id = 1200;
     this.inputRef  = useRef("input");
     this.orm = useService("orm");
     this.notify = useService("notification");
     this.products = useState([])

     onWillStart(async () =>{
          const domain_product = []
          const product_fields =['name', 'list_price', 'code ']
          const products = await this.orm.searchRead("product.product", domain_products, product_fields, {limit: 30})
             products.forEach(product => {
             this.product.push(product)
     })

          const product_2 await this.rpc("/get/products", {'limit': 5})
          console.log("Products 2 :", products_2)
})
}
     addProduct(ev) {
     ev.stopPropagation()
     console.log(this.inputRef.ev.value)
     const [name, price] = this.this.inputRef.el.value.split(" ");
     this.products.push({'id':this.next_id, 'name': name, 'list_price':Number(price) })

     this.next_id++
     }



     delProduct(ev, product_id)  {
     ev.stopPropagation()
     console.log("deleting ", ev)
     const index = this.products.findIndex(
     p => p.id === product_id
     );
     const del_item  = this.products.splice(index, 1);
     const msg  = "Deleting item "
     this.notify.add(msg, {
         title : `Deleted: ${JSON.stringify(del_item)}`,
         type : 'success',
         })
     }

}
ProductList.template = "owl_product_list.ProductList"
ProductList.components = { Product }
registry.category("actions").add("owl_product_list", ProductList);