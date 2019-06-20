import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";
import { CartServiceService } from "../services/cart-service.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Wishlist } from "../models/wishlist";
import { WishlistServiceService } from "../services/wishlist-service.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-all",
  templateUrl: "./product-all.component.html",
  styleUrls: ["./product-all.component.css"]
})
export class ProductAllComponent implements OnInit {
  product_arr: Product[] = [];
  wishlist_arr: Wishlist[];
  wishProdId: number[] = [];
  insertCartForm: FormGroup;
  id: string;
  pName: string;
  insertWishlistForm: FormGroup;
  productName: string;

  constructor(
    private _product: ProductServiceService,
    private _cart: CartServiceService,
    private _wishlist: WishlistServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = localStorage.getItem("token");
    console.log("id:" + this.id);
    console.log("uid: " + this.route.snapshot.paramMap.get("uId"));
    if (this.route.snapshot.paramMap.get("uId") != null) {
      this.productName = this.route.snapshot.paramMap.get("uId");

      this._product.getAllProduct().subscribe((data: any) => {
        for (var p = 0; p < data.length; p++) {
          if (data[p].product_name == this.productName) {
            this.product_arr.push(data[0]);
            console.log(this.product_arr);
            this.pName = this.product_arr[0].product_name;
          }
        }
      });
    } else {
      this._product.getAllProduct().subscribe((data: any) => {
        this.product_arr = data;
        console.log(this.product_arr);
        this.pName = this.product_arr[0].product_name;
      });
    }

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
          this.router.navigate(["/cart"]);
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
      for (var k = 0; k < this.wishProdId.length; k++) {
        if (this.wishProdId[k] == product_id) {
          this.wishProdId.splice(k, 1);
        }
      }
    });
  }
}
