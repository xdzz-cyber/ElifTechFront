import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Shop} from "../../models/shop.model";
import {Observable} from "rxjs";
import {SHOPS_BASE_URL} from "../../common/constants";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  //private baseUrl = 'http://localhost:3000/shops';
  constructor(private httpClient: HttpClient) { }
    getShops(): Observable<Shop[]> {
      return this.httpClient.get<Shop[]>(SHOPS_BASE_URL);
    }
}
