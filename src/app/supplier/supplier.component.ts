import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from "../domaine/Product";
import {Supplier} from "../domaine/Supplier";

@Component({
  selector: '[app-supplier]',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  @Input() elSup : Supplier;

  @Output() outputVar = new EventEmitter<Supplier>();

  @HostListener("click")
  supSelected(){
    this.outputVar.emit(this.elSup)
  }

  constructor() { }

  ngOnInit() {
  }

}
