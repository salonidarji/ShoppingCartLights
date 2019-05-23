import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OrderDetailServiceService {
  orderDetail_url = "http://localhost:3000/orderDetail/";
  constructor(private _http: HttpClient) {}

  getAllOrderDetail() {
    return this._http.get(this.orderDetail_url);
  }

  getOrderDetail(id) {
    return this._http.get(this.orderDetail_url + id);
  }

  deleteOrderDetail(id) {
    return this._http.delete(this.orderDetail_url + id);
  }

  insertOrderDetail(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.orderDetail_url, body, httpOptions);
  }

  updateOrderDetail(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.orderDetail_url + id, body, httpOptions);
  }
}
