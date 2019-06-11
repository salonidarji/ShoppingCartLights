import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WishlistServiceService {
  wishlist_url = "http://localhost:3000/wishlist/";
  constructor(private _http: HttpClient) {}

  getAllWishlist() {
    return this._http.get(this.wishlist_url);
  }

  getWishlist(id) {
    return this._http.get(this.wishlist_url + id);
  }

  deleteWishlist(id) {
    return this._http.delete(this.wishlist_url + id);
  }

  insertWishlist(item) {
    let body = JSON.stringify(item);
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this._http.post(this.wishlist_url, body, httpOptions);
  }
}
