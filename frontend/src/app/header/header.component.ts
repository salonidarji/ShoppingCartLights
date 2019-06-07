import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationServiceService } from "../services/authentication-service.service";
import { CategoryServiceService } from "../services/category-service.service";
import { Category } from "../models/category";
import { CartServiceService } from "../services/cart-service.service";
import { Cart } from "../models/cart";
import { ProductServiceService } from "../services/product-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  flag: string;
  id: string;

  category_arr: Category[];
  cart_arr: Cart[] = [];
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
    private _product: ProductServiceService
  ) {}

  ngOnInit() {
    console.log("header init");
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("token");

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
        for (var i = 0; i < this.cart_arr.length; i++) {
          this.productId = this.cart_arr[i].fk_product_id;
          this.qty_arr.push(this.cart_arr[i].product_qty);
          console.log(this.productId);
          this._product.getProduct(this.productId).subscribe(
            (data: any) => {
              this.product_arr = data;
              console.log(this.product_arr);
              for (var j = 0; j < this.product_arr.length; j++) {
                this.productPrice_arr.push(
                  this.product_arr[j].product_sale_price
                );
                this.productName_arr.push(this.product_arr[j].product_name);
                this.productImage_arr.push(this.product_arr[j].image_url);
                this.total_arr[j] =
                  this.qty_arr[j] * <any>this.productPrice_arr[j];
                if (j == this.product_arr.length - 1) {
                  this.grandTotal += this.total_arr[j];
                }
              }
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
  }

  logout(): void {
    console.log("Logout");
    this._authService.logout();

    this.ngOnInit();
  }

  deleteItem(pk_cart_id) {
    this._cart.deleteCart(pk_cart_id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }
}
