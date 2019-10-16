import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../domaine/Product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product = new Product()


  constructor(private activatedroute: ActivatedRoute, private service: ProductService) {
  }
  ngOnInit() {
    const name = (this.activatedroute.snapshot.params.name);
    this.service.getOne(name).then(res => this.product = res);
    console.log(this.product)
  }



}
