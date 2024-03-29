import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";
import { CartServiceService } from "../services/cart-service.service";
import { Router } from "@angular/router";
import { WishlistServiceService } from "../services/wishlist-service.service";
import { Wishlist } from "../models/wishlist";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product_arr: Product[] = [];
  wishlist_arr: Wishlist[];
  wishProdId: number[] = [];
  insertCartForm: FormGroup;
  insertWishlistForm: FormGroup;
  id: string;
  heartColor = "";

  constructor(
    private _product: ProductServiceService,
    private _cart: CartServiceService,
    private _wishlist: WishlistServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this._product.getAllProduct().subscribe((data: any) => {
      // this.product_arr = data;
      for (var i = 0; i < 6; i++) {
        this.product_arr.push(data[i]);
      }
    });

    this.id = localStorage.getItem("tokenWeb");
    console.log("id:" + this.id);

    this._wishlist.getWishlist(this.id).subscribe(
      (data: any) => {
        this.wishlist_arr = data;
        console.log(this.wishlist_arr);
        for (var k = 0; k < this.wishlist_arr.length; k++) {
          if (this.wishlist_arr[k].wishlist_value == 1) {
            this.wishProdId.push(this.wishlist_arr[k].fk_product_id);
          }
        }
        console.log(this.wishProdId);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally wishlist");
      }
    );
  }

  addToCart(product_id) {
    if (this.id != "") {
      this.insertCartForm = this.fb.group({
        fk_user_email_id: [this.id],
        fk_product_id: [product_id],
        product_qty: [1]
      });

      this._cart.insertCart(this.insertCartForm.value).subscribe(
        (data: any) => {
          console.log(this.insertCartForm.value);
          //this.router.navigate(["/cart"]);
          window.location.href = "/cart";
        },
        function(err) {
          console.log(err);
        },
        function() {
          console.log("add to cart done");
        }
      );
    } else {
      this.router.navigate(["/loginSignup"]);
    }
  }

  addToWishlist(product_id) {
    if (this.id != "") {
      this.insertWishlistForm = this.fb.group({
        fk_user_email: [this.id],
        fk_product_id: [product_id],
        wishlist_value: [1]
      });

      this._wishlist.insertWishlist(this.insertWishlistForm.value).subscribe(
        (data: any) => {
          console.log(data);
          this.wishlist_arr.push(data);
          for (var k = 0; k < this.wishlist_arr.length; k++) {
            if (this.wishlist_arr[k].wishlist_value == 1) {
              this.wishProdId.push(this.wishlist_arr[k].fk_product_id);
            }
          }
          window.location.href = "/";
        },
        function(err) {
          console.log(err);
        }
      );
    } else {
      alert("Please do login first");
      this.router.navigate(["/loginSignup"]);
    }
  }

  deleteFromWishlist(product_id) {
    this._wishlist.deleteWishlist(product_id).subscribe((data: any) => {
      console.log(data);
      this.heartColor = "";
      for (var k = 0; k < this.wishProdId.length; k++) {
        if (this.wishProdId[k] == product_id) {
          this.wishProdId.splice(k, 1);
        }
      }
      window.location.href = "/";
    });
  }
}
