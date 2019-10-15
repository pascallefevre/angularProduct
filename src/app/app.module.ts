import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductComponent } from './product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BicsizePipe } from './bicsize.pipe';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierlistComponent } from './supplierlist/supplierlist.component';
import { ProductFormComponent } from './product-form/product-form.component';
import {ProductFormReactiveComponent} from "./product-form-reactive/product-form-reactive.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductlistComponent,
    ProductComponent,
    BicsizePipe,
    SupplierComponent,
    SupplierlistComponent,
    ProductFormComponent,
    ProductFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
