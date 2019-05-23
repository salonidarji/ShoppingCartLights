import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OrderServiceService {
  order_url = "http://localhost:3000/order/";
  constructor(private _http: HttpClient) {}

  getAllOrder() {
    return this._http.get(this.order_url);
  }

  getOrder(id) {
    return this._http.get(this.order_url + id);
  }

  deleteOrder(id) {
    return this._http.delete(this.order_url + id);
  }

  insertOrder(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.order_url, body, httpOptions);
  }

  updateOrder(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.order_url + id, body, httpOptions);
  }
}
