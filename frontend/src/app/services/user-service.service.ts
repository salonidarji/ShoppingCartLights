import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  user_url = "http://localhost:3000/user/";
  constructor(private _http: HttpClient) {}

  getAllUser() {
    return this._http.get(this.user_url);
  }

  getUser(id) {
    return this._http.get("http://localhost:3000/profile/" + id);
  }

  getUserForPassword(id) {
    return this._http.get("http://localhost:3000/sendEmailUser/" + id);
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

  sendEmail(item) {
    let body = JSON.stringify(item);
    console.log("json:" + item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(
      "http://localhost:3000/sendEmailUser/",
      body,
      httpOptions
    );
  }

  changePassword(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(
      "http://localhost:3000/profile/" + id,
      body,
      httpOptions
    );
  }
}
