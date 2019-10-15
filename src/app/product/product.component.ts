import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from "../domaine/Product";
import {Person} from "../domaine/Person";
import {ProductService} from "../product.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  @Input() elProduit : Product;

  @Output() outputVar = new EventEmitter<Product>();

  @HostListener("click")
  productSelected(){
    this.outputVar.emit(this.elProduit)
  }

  constructor( ) {


  }

  ngOnInit() {
  }



}
