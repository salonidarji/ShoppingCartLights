import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationServiceService } from "../services/authentication-service.service";
import { CategoryServiceService } from "../services/category-service.service";
import { Category } from "../models/category";
import { CartServiceService } from "../services/cart-service.service";
import { Cart } from "../models/cart";
import { ProductServiceService } from "../services/product-service.service";
import { WishlistServiceService } from "../services/wishlist-service.service";
import { Wishlist } from "../models/wishlist";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  flag: string;
  id: string;

  searchForm: FormGroup;

  category_arr: Category[];
  cart_arr: Cart[] = [];
  wishlist_arr: Wishlist[];

  public product_arr: any[] = [];
  product_id: number;

  productId: number;
  qty_arr: number[] = [];
  total_arr: number[] = [];
  productPrice_arr: string[] = [];
  productName_arr: string[] = [];
  productImage_arr: string[] = [];

  grandTotal = 0;

  constructor(
    public _authService: AuthenticationServiceService,
    private router: Router,
    private _category: CategoryServiceService,
    private _cart: CartServiceService,
    private _wishlist: WishlistServiceService,
    private fb: FormBuilder,
    private _product: ProductServiceService
  ) {}

  ngOnInit() {
    console.log("header init");
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("tokenWeb");

    this._category.getAllCategory().subscribe(
      (data: any) => {
        this.category_arr = data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally category");
      }
    );

    this._cart.getCartByUser(this.id).subscribe(
      (data: any) => {
        this.cart_arr = data;
        var tempProdId: number = 0;
        for (var i = 0; i < this.cart_arr.length; i++) {
          this.productId = this.cart_arr[i].fk_product_id;
          this.qty_arr.push(this.cart_arr[i].product_qty);
          console.log(this.qty_arr);

          this._product.getProduct(this.productId).subscribe(
            (data: any) => {
              this.product_arr.push(data);
              console.log(this.product_arr);
              console.log("before temp: " + tempProdId);
              for (var j = 0; j < this.product_arr.length; j++) {
                console.log(
                  "product j:" + this.product_arr[j][0].pk_product_id
                );
                if (this.product_arr[j][0].pk_product_id != tempProdId) {
                  tempProdId = this.product_arr[j][0].pk_product_id;
                  this.productName_arr.push(
                    this.product_arr[j][0].product_name
                  );
                  this.productImage_arr.push(this.product_arr[j][0].image_url);

                  this.productPrice_arr.push(
                    this.product_arr[j][0].product_sale_price
                  );
                  this.total_arr[j] =
                    this.qty_arr[j] * <any>this.productPrice_arr[j];
                  if (j == this.product_arr.length - 1) {
                    this.grandTotal += this.total_arr[j];
                  }
                }
              }
              console.log("priceArr: " + this.productPrice_arr);
              console.log("nameArr: " + this.productName_arr);
              console.log("qtyArr: " + this.qty_arr);
              console.log("totalArr: " + this.total_arr);
            },
            function(err) {
              console.log(err);
            },
            function() {
              console.log("product done");
            }
          );
        }
      },
      function(err) {
        console.log(err);
      },
      function() {
        //console.log("cart get done");
      }
    );

    this._wishlist.getWishlist(this.id).subscribe(
      (data: any) => {
        this.wishlist_arr = data;
        console.log(this.wishlist_arr);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally wishlist");
      }
    );

    this.searchForm = this.fb.group({
      search_product: [""],
      search_category: [""]
    });
  }

  logout(): void {
    console.log("Logout");
    this._authService.logout();

    window.location.href = "/";
  }

  deleteItem(pk_cart_id) {
    this._cart.deleteCart(pk_cart_id).subscribe((data: any) => {
      this.grandTotal = 0;
      this.total_arr.forEach(element => {
        element = 0;
      });
      this.ngOnInit();
    });
  }

  onSearch() {
    console.log(this.searchForm.controls["search_category"].value);
    // category = yes product =no
    if (
      this.searchForm.controls["search_category"].value != "" &&
      this.searchForm.controls["search_product"].value == ""
    ) {
      this._category
        .getProductByCategory(this.searchForm.controls["search_category"].value)
        .subscribe((data: any) => {
          this.router.navigate([
            "/productByCategory",
            this.searchForm.controls["search_category"].value
          ]);
        });
    } // category = yes product =yes
    else if (
      this.searchForm.controls["search_category"].value != "" &&
      this.searchForm.controls["search_product"].value != ""
    ) {
      this._category
        .getProductByCategory(this.searchForm.controls["search_category"].value)
        .subscribe((data: any) => {
          this.router.navigate([
            "/productByCategory",
            this.searchForm.controls["search_category"].value
          ]);
        });
    } // category = no product =yes
    else if (
      this.searchForm.controls["search_category"].value == "" &&
      this.searchForm.controls["search_product"].value != ""
    ) {
      this._product.getAllProduct().subscribe((data: any) => {
        this.router.navigate([
          "/productAll",
          this.searchForm.controls["search_product"].value
        ]);
      });
    } // category = no product =no
    else if (
      this.searchForm.controls["search_category"].value == "" &&
      this.searchForm.controls["search_product"].value == ""
    ) {
      this.router.navigate(["/productAll"]);
    }
  }
}
