import { Injectable } from '@angular/core';
import { Goods } from "../models/goods.model";

@Injectable({
  providedIn: 'root'
})
export class CartSharedService {
  cartItems: Goods[] = [];

  constructor() {
    this.loadCartItems();
  }

  private loadCartItems(): void {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.cartItems = JSON.parse(cartItems);
    }
  }

  private saveCartItems(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  addToCart(item: Goods): void {
    this.cartItems.push(item);
    this.saveCartItems();
  }

  removeFromCart(item: Goods): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveCartItems();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems();
  }
}
