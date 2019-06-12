import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";
import { CartServiceService } from "../services/cart-service.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Wishlist } from "../models/wishlist";
import { WishlistServiceService } from "../services/wishlist-service.service";

@Component({
  selector: "app-product-all",
  templateUrl: "./product-all.component.html",
  styleUrls: ["./product-all.component.css"]
})
export class ProductAllComponent implements OnInit {
  product_arr: Product[];
  wishlist_arr: Wishlist[];
  wishProdId: number[] = [];
  insertCartForm: FormGroup;
  id: string;
  pName: string;
  insertWishlistForm: FormGroup;

  constructor(
    private _product: ProductServiceService,
    private _cart: CartServiceService,
    private _wishlist: WishlistServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.id = localStorage.getItem("token");
    console.log("id:" + this.id);

    this._product.getAllProduct().subscribe(
      (data: any) => {
        this.product_arr = data;
        console.log(this.product_arr);
        this.pName = this.product_arr[0].product_name;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("products done");
      }
    );

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
          alert("Product Successfully added to Cart");
          this.ngOnInit();
        },
        function(err) {
          console.log(err);
        },
        function() {
          console.log("add to cart done");
        }
      );
    } else {
      alert("please Do Login first...!!!");
    }
  }

  addToWishlist(product_id) {
    this.insertWishlistForm = this.fb.group({
      fk_user_email: [this.id],
      fk_product_id: [product_id]
    });

    this._wishlist.insertWishlist(this.insertWishlistForm.value).subscribe(
      (data: any) => {
        console.log(data);
        for (var k = 0; k < this.wishlist_arr.length; k++) {
          if (this.wishlist_arr[k].wishlist_value == 1) {
            this.wishProdId.push(this.wishlist_arr[k].fk_product_id);
          }
        }
      },
      function(err) {
        console.log(err);
      }
    );
  }

  deleteFromWishlist(product_id) {
    this._wishlist.deleteWishlist(product_id).subscribe((data: any) => {
      console.log(data);
      for (var k = 0; k < this.wishProdId.length; k++) {
        if (this.wishProdId[k] == product_id) {
          this.wishProdId.splice(k, 1);
        }
      }
    });
  }
}
