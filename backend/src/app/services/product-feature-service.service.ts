import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductFeatureServiceService {
  productFeature_url = "http://localhost:3000/productFeature/";
  constructor(private _http: HttpClient) {}

  getAllProductFeature() {
    return this._http.get(this.productFeature_url);
  }

  getProductFeature(id) {
    return this._http.get(this.productFeature_url + id);
  }

  deleteProductFeature(id) {
    return this._http.delete(this.productFeature_url + id);
  }

  insertProductFeature(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.productFeature_url, body, httpOptions);
  }

  updateProductFeature(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.productFeature_url + id, body, httpOptions);
  }
}
