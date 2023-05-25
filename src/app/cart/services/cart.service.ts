import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CARTS_BASE_URL} from "../../common/constants";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  //private baseUrl = 'http://localhost:3000/carts';
  constructor(private httpClient: HttpClient) { }

  placeOrder(formData: any): Observable<object> {
    return this.httpClient.post(CARTS_BASE_URL, {goods: formData.goods, name: formData.name,
      email: formData.email, phone: formData.phone, address: formData.address, totalPrice: formData.totalPrice});
  }
}
