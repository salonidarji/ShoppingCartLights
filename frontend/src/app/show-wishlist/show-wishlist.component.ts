import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";
import { CartServiceService } from "../services/cart-service.service";
import { Router } from "@angular/router";
import { WishlistServiceService } from "../services/wishlist-service.service";
import { Wishlist } from "../models/wishlist";

@Component({
  selector: "app-show-wishlist",
  templateUrl: "./show-wishlist.component.html",
  styleUrls: ["./show-wishlist.component.css"]
})
export class ShowWishlistComponent implements OnInit {
  product_arr: Product[] = [];
  wishlist_arr: Wishlist[];
  wishProdId: number[] = [];
  insertCartForm: FormGroup;
  insertWishlistForm: FormGroup;
  id: string;

  constructor(
    private _product: ProductServiceService,
    private _cart: CartServiceService,
    private _wishlist: WishlistServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = localStorage.getItem("token");

    this._wishlist.getWishlist(this.id).subscribe(
      (data: any) => {
        this.wishlist_arr = data;
        console.log(this.wishlist_arr);
        for (var k = 0; k < this.wishlist_arr.length; k++) {
          if (this.wishlist_arr[k].wishlist_value == 1) {
            this.wishProdId.push(this.wishlist_arr[k].fk_product_id);
          }
        }

        for (var i = 0; i < this.wishProdId.length; i++) {
          this._product
            .getProduct(this.wishProdId[i])
            .subscribe((data: any) => {
              this.product_arr.push(data);
            });
        }

        console.log(this.product_arr);

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
    this.insertCartForm = this.fb.group({
      fk_user_email_id: [this.id],
      fk_product_id: [product_id],
      product_qty: [1]
    });

    this._cart.insertCart(this.insertCartForm.value).subscribe(
      (data: any) => {
        console.log(this.insertCartForm.value);
        this.deleteFromWishlist(product_id);
        this.router.navigate(["/cart"]);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("add to cart done");
      }
    );
  }

  deleteFromWishlist(product_id) {
    this._wishlist.deleteWishlist(product_id).subscribe((data: any) => {
      console.log(data);
      for (var k = 0; k < this.wishProdId.length; k++) {
        if (this.wishProdId[k] == product_id) {
          this.wishlist_arr.splice(k, 1);
        }
      }
    });
  }
}
