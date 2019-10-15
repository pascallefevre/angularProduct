import { Component, OnInit } from '@angular/core';
import {Product} from "../domaine/Product";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";
import {ProductlistComponent} from "../productlist/productlist.component";

@Component({
  selector: '[app-product-form-reactive]',
  templateUrl: './product-form-reactive.component.html',
  styleUrls: ['./product-form-reactive.component.css']
})
export class ProductFormReactiveComponent implements OnInit {

  product=new Product();
  formAdd:FormGroup;
  productService  = new ProductService();
  productlisteComponent = new ProductlistComponent(this.productService);

  constructor(private fb: FormBuilder) {



  /*this.formAdd = new FormGroup({
    name: new FormControl(),
    product: new FormControl()
  })*/
  //ou alors
  this.formAdd = fb.group({
    supplier: this.product.supplier,
    name: this.product.name,
    description: this.product.description,
    price: this.product.price,
    truc: fb.group({
      id:10,
      color:'green'
    })
  })
}
    calladd()
    {
        if(this.formAdd.valid)
        {
        console.log("submitted")
        this.productService.add(this.formAdd.value).then
          (
              () => { console.log(this.productlisteComponent.lp) }
          );
        }
    }


  ngOnInit() {
  }
}
