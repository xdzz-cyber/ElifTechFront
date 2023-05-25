import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ShopsPageComponent} from "./shops/shops-page/shops-page.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ShopsModule} from "./shops/shops.module";
import {CartComponent} from "./cart/cart-page/cart.component";
import {ShopService} from "./shops/shopService/shop.service";
import {CartModule} from "./cart/cart.module";
import {CartSharedService} from "./services/cart-shared.service";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'carts', component: CartComponent},
  { path: 'shops', component: ShopsPageComponent },
  { path: '', redirectTo: '/shops', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ShopsModule,
    CartModule,
    ReactiveFormsModule
  ],
  providers: [ShopService, CartSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
