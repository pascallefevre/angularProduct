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
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {MonAComponent} from "../../../projetPerson/src/app/mon-a/mon-a.component";
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes=[
  {path: 'products', component: ProductlistComponent},
  {path:'product/:name', component: ProductDetailComponent},
  {path: 'suppliers', component: SupplierlistComponent},
  {path:'reactivproform', component: ProductFormReactiveComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
]


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
    ProductFormReactiveComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
