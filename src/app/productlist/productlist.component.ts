import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../domaine/Product";
import {ProductService} from "../product.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-productlist]',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  lp= []
  lpf = this.lp

  elSelection: Product;
  find: string = "";
  constructor(private productService: ProductService) {
    this.productService.findAll().then(res => this.lp = res)
  }

  filter() {
    this.lpf = this.lp.filter(p => p.name.toLowerCase().search(this.find.toLowerCase()) !== -1);
    return this.lpf
  }

  ngOnInit() {
  }
  getValue(value: Product){
    this.elSelection = value
  }


}
