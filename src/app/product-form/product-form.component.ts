import { Component, OnInit } from '@angular/core';
import {Product} from "../domaine/Product";
import {ProductService} from "../product.service";
import {ProductlistComponent} from "../productlist/productlist.component";

@Component({
  selector: '[app-product-form]',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
product=new  Product();
  productService  = new ProductService();
  productlisteComponent = new ProductlistComponent(this.productService);
  formSubmitted = false;

calladd(myform)
{
        this.formSubmitted=true;
        if(myform)
        {
              console.log("submitted")
              this.productService.add(this.product).then(
                () => {console.log(this.productlisteComponent.lp)}
                );
         }


}


  constructor() { }

  ngOnInit() {
  }

}
