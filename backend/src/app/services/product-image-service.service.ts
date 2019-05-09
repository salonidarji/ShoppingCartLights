import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductImageServiceService {
  productImage_url = "http://localhost:3000/productImage/";
  constructor(private _http: HttpClient) {}

  getAllProductImage() {
    return this._http.get(this.productImage_url);
  }

  getProductImage(id) {
    return this._http.get(this.productImage_url + id);
  }

  deleteProductImage(id) {
    return this._http.delete(this.productImage_url + id);
  }

  insertProductImage(item) {
    let body = JSON.stringify(item);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this._http.post(this.productImage_url, body, httpOptions);
  }

  updateProductImage(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.productImage_url + id, body, httpOptions);
  }
}
