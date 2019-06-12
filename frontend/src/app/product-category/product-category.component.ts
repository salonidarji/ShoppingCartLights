import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoriesComponent } from "../categories/categories.component";
import { CategoryServiceService } from "../services/category-service.service";
import { Product } from "../models/product";
import { WishlistServiceService } from "../services/wishlist-service.service";
import { Wishlist } from "../models/wishlist";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-product-category",
  templateUrl: "./product-category.component.html",
  styleUrls: ["./product-category.component.css"]
})
export class ProductCategoryComponent implements OnInit {
  product_arr: Product;
  wishlist_arr: Wishlist[];
  wishProdId: number[] = [];
  insertWishlistForm: FormGroup;
  id: string;
  userEmail: string;

  pName: string;
  constructor(
    private route: ActivatedRoute,
    private _category: CategoryServiceService,
    private _wishlist: WishlistServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("uId");
    this.userEmail = localStorage.getItem("token");
    this._category.getProductByCategory(this.id).subscribe(
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

    this._wishlist.getWishlist(this.userEmail).subscribe(
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

  addToWishlist(product_id) {
    this.insertWishlistForm = this.fb.group({
      fk_user_email: [this.userEmail],
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
