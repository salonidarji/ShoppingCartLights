import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  user_url = "http://localhost:3000/user/";
  constructor(private _http: HttpClient) {}

  getAllUser() {
    return this._http.get(this.user_url);
  }

  getUser(item) {
    return this._http.get(this.user_url + item);
  }

  deleteUser(id) {
    return this._http.delete(this.user_url + id);
  }

  insertUser(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.user_url, body, httpOptions);
  }

  updateUser(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.user_url + id, body, httpOptions);
  }
}
