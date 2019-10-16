import { Component, OnInit } from '@angular/core';
import {Product} from "../domaine/Product";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";
import {ProductlistComponent} from "../productlist/productlist.component";
import {JsonplaceholderService} from "../jsonplaceholder.service";
import {Router} from "@angular/router";

@Component({
  selector: '[app-product-form-reactive]',
  templateUrl: './product-form-reactive.component.html',
  styleUrls: ['./product-form-reactive.component.css']
})
export class ProductFormReactiveComponent implements OnInit {

  product=new Product();
  formAdd:FormGroup;
  productlisteComponent = new ProductlistComponent(this.productService);

  constructor(private fb: FormBuilder, private productService: ProductService, private service: JsonplaceholderService , private router: Router ) {



  /*this.formAdd = new FormGroup({
    name: new FormControl(),
    product: new FormControl()
  })*/
  //ou alors
  this.formAdd = fb.group({
    supplier: this.product.supplier,
    name: this.product.name,
    description: this.product.description,
    price: this.product.price
    /*truc: fb.group({
      id:10,
      color:'green'
    })*/
  })

}
    calladd()
    {
        if(this.formAdd.valid)
        {
        console.log("submitted")
        this.productService.add(this.formAdd.value).then
          (
              /*() => { console.log(this.productlisteComponent.lp)}*/
            () => { this.router.navigate(['/products']) }
          );

        }
    }


  ngOnInit() {
    this.service.getAll().then(res=> console.log(res))
  }
}
