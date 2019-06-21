import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PaymentServiceService {
  constructor(private _http: HttpClient) {}

  paymentVerified(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(
      "http://localhost:3000/payment/" + id,
      body,
      httpOptions
    );
  }
}
