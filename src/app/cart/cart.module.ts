import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CartComponent} from "./cart-page/cart.component";

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CartModule { }
