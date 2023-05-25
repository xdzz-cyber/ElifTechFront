import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ShopsPageComponent } from './shops-page/shops-page.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ShopsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage
  ]
})
export class ShopsModule { }
