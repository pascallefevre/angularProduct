import { Component, OnInit } from '@angular/core';
import {Product} from "../domaine/Product";
import {Supplier} from "../domaine/Supplier";

@Component({
  selector: '[app-supplierlist]',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent implements OnInit {
  elSup: Supplier;
  constructor() { }

  ngOnInit() {
  }
  getValue(value: Supplier){
    this.elSup = value
  };

  s1: Supplier = new Supplier('Fils de Pomme', '65422256B58');
  s2: Supplier = new Supplier('Bayeux', '86645852F85');
  s3: Supplier = new Supplier('Erdogan', 'TUDÜTHYTGYUJTÜÜ');

  sl=[this.s1,this.s2,this.s3]
}
