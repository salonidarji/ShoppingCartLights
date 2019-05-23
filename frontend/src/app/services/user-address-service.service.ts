import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserAddressServiceService {
  userAddress_url = "http://localhost:3000/userAddress/";
  constructor(private _http: HttpClient) {}

  getAllUserAddress() {
    return this._http.get(this.userAddress_url);
  }

  getUserAddress(id) {
    return this._http.get(this.userAddress_url + id);
  }

  deleteUserAddress(id) {
    return this._http.delete(this.userAddress_url + id);
  }

  insertUserAddress(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.userAddress_url, body, httpOptions);
  }

  updateUserAddress(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.userAddress_url + id, body, httpOptions);
  }
}
