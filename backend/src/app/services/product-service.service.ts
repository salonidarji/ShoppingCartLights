import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductServiceService {
  product_url = "http://localhost:3000/product/";
  constructor(private _http: HttpClient) {}

  getAllProduct() {
    return this._http.get(this.product_url);
  }

  getProduct(id) {
    return this._http.get(this.product_url + id);
  }

  deleteProduct(p_id, pi_id, pf_id) {
    console.log(this.product_url + p_id + "&" + pi_id);
    return this._http.delete(
      this.product_url + p_id + "&" + pi_id + "&" + pf_id
    );
  }

  insertProduct(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.product_url, body, httpOptions);
  }

  updateProduct(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.product_url + id, body, httpOptions);
  }
}
