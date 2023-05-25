import {Component, OnDestroy, OnInit} from '@angular/core';
import {Goods} from "../../models/goods.model";
import {CartSharedService} from "../../services/cart-shared.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CartService} from "../services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy{
  goods: Goods[] = [];
  myForm: FormGroup;
  private subscription!: Subscription;

  constructor(private cartSharedService: CartSharedService, private formBuilder: FormBuilder,
              private cartService: CartService) {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getCartItems();
    this.setDefaultSelectedCount();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  get formControls() {
    return this.myForm.controls;
  }

  submitForm(): void {
    if (this.myForm.valid) {
      const formData = {
        ...this.myForm.value,
        totalPrice: this.calculateTotal(),
        goods: this.goods
      };
      this.subscription = this.cartService.placeOrder(formData).subscribe(() => {
        this.cartSharedService.clearCart();
        this.myForm.reset();
        this.getCartItems();
      });
      console.log('Form submitted successfully');
    } else {
      console.log('Form validation errors');
    }
  }

  setDefaultSelectedCount() {
    for (const item of this.goods) {
      item.selectedCount = 1;
    }
  }

  getCartItems() {
    this.goods = this.cartSharedService.cartItems;
  }

  removeFromCart(item: Goods) {
    this.cartSharedService.removeFromCart(item);
    this.getCartItems();
  }

  calculateTotal(): number {
    return this.goods.reduce((total, item) => total + (item.price * item.selectedCount), 0);
  }
}
