import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartServiceService {
  cart_url = "http://localhost:3000/cart/";
  constructor(private _http: HttpClient) {}

  getAllCart() {
    return this._http.get(this.cart_url);
  }

  getCartByUser(id) {
    return this._http.get(this.cart_url + id);
  }

  deleteCart(id) {
    return this._http.delete(this.cart_url + id);
  }

  insertCart(item: any) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.cart_url, body, httpOptions);
  }

  updateCart(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.cart_url + id, body, httpOptions);
  }
}
