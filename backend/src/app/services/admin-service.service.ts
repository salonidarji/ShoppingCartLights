import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AdminServiceService {
  admin_url = "http://localhost:3000/admin/";
  constructor(private _http: HttpClient) {}

  getAllAdmin() {
    return this._http.get(this.admin_url);
  }

  getAdmin(id) {
    return this._http.get(this.admin_url + id);
  }

  deleteAdmin(id) {
    return this._http.delete(this.admin_url + id);
  }

  insertAdmin(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.admin_url, body, httpOptions);
  }

  updateAdmin(id, item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.put(this.admin_url + id, body, httpOptions);
  }

  sendEmail(item) {
    let body = JSON.stringify(item);
    console.log("json:" + item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(
      "http://localhost:3000/sendEmail/",
      body,
      httpOptions
    );
  }
}
