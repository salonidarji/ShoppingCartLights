import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ReviewServiceService {
  review_url = "http://localhost:3000/review/";
  constructor(private _http: HttpClient) {}

  getAllReview() {
    return this._http.get(this.review_url);
  }

  getReview(id) {
    return this._http.get(this.review_url + id);
  }

  deleteReview(id) {
    return this._http.delete(this.review_url + id);
  }

  insertReview(item) {
    let body = JSON.stringify(item);
    console.log(body);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.review_url, body, httpOptions);
  }

  updateReview(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.review_url + id, body, httpOptions);
  }
}
