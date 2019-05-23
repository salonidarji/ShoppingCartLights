import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CategoryServiceService {
  category_url = "http://localhost:3000/category/";
  constructor(private _http: HttpClient) {}

  getAllCategory() {
    return this._http.get(this.category_url);
  }

  getProductByCategory(id) {
    return this._http.get(this.category_url + id);
  }

  deleteCategory(id) {
    return this._http.delete(this.category_url + id);
  }

  insertCategory(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.category_url, body, httpOptions);
  }

  updateCategory(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.category_url + id, body, httpOptions);
  }
}
