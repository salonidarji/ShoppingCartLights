import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FaqServiceService {
  faq_url = "http://localhost:3000/faq/";
  constructor(private _http: HttpClient) {}

  getAllFaq() {
    return this._http.get(this.faq_url);
  }

  getFaq(id) {
    return this._http.get(this.faq_url + id);
  }

  deleteFaq(id) {
    return this._http.delete(this.faq_url + id);
  }

  insertFaq(item) {
    let body = JSON.stringify(item);
    console.log(body);

    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.faq_url, body, httpOptions);
  }

  updateFaq(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.faq_url + id, body, httpOptions);
  }
}
