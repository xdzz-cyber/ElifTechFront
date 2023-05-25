import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShopService} from "../shopService/shop.service";
import {Shop} from "../../models/shop.model";
import {Goods} from "../../models/goods.model";
import {CartSharedService} from "../../services/cart-shared.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shops-page',
  templateUrl: './shops-page.component.html',
  styleUrls: ['./shops-page.component.css']
})
export class ShopsPageComponent implements OnInit, OnDestroy{
  shops: Shop[] = [];
  selectedShop: Shop | null = null;
  private subscription!: Subscription;
  constructor(private shopService: ShopService, private cartSharedService: CartSharedService) {

  }
  ngOnInit(): void {
    this.getShops();
    this.enableOtherShops();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getShops() {
    this.subscription = this.shopService.getShops().subscribe((shops: Shop[] ) => {
      this.shops = shops.map((shop: Shop, idx) => {
        if(idx === 0) {
          shop.showGoods = true;
        }
        return shop;
      });
    }, (error: any) => {
      console.log(error);
    });
  }
  toggleGoods(shop: Shop): void {
    // this.selectedShop = this.selectedShop === shop ? null : shop;
    this.selectedShop = this.selectedShop === shop ? null : shop;
  }
  addToCart(goods: Goods) {
    this.cartSharedService.addToCart(goods);
    if (this.selectedShop) {
      this.disableOtherShops();
    }
  }
  isShopSelected(shop: Shop): boolean {
    return this.selectedShop === shop;
  }

  private disableOtherShops() {
      this.shops = this.shops.map((shop: Shop) => {
      if (shop !== this.selectedShop) {
        shop.isDisabled = true;
      }
      return shop;
    });
  }

  private enableOtherShops() {
    this.shops = this.shops.map((shop: Shop) => {
      shop.isDisabled = false;
      return shop;
    });
  }
}
