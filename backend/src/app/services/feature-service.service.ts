import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FeatureServiceService {
  feature_url = "http://localhost:3000/feature/";
  constructor(private _http: HttpClient) {}

  getAllFeature() {
    return this._http.get(this.feature_url);
  }

  getFeature(id) {
    return this._http.get(this.feature_url + id);
  }

  deleteFeature(id) {
    return this._http.delete(this.feature_url + id);
  }

  insertFeature(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.feature_url, body, httpOptions);
  }

  updateFeature(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.feature_url + id, body, httpOptions);
  }
}
