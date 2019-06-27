import { Component, OnInit } from "@angular/core";
import { CartServiceService } from "../services/cart-service.service";
import { Cart } from "../models/cart";
import { ProductServiceService } from "../services/product-service.service";
import { Product } from "../models/product";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  flag: string;
  id: string;
  cartForm: FormGroup;

  cart_arr: Cart[] = [];
  public product_arr: any[] = [];
  product_id: number;

  productId: number;
  qty_arr: number[] = [];
  total_arr: number[] = [];
  productPrice_arr: string[] = [];
  productName_arr: string[] = [];
  productImage_arr: string[] = [];

  shipping = 50;
  grandTotal = 0;

  constructor(
    private _cart: CartServiceService,
    private _product: ProductServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("tokenWeb");

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
  }

  total(pk_cart_id, i) {
    this.total_arr[i] = this.qty_arr[i] * <any>this.productPrice_arr[i];
    this.grandTotal = 0;
    for (let i = 0; i < this.total_arr.length; i++) {
      this.grandTotal += this.total_arr[i];
    }

    this.cartForm = this.fb.group({
      product_qty: [this.qty_arr[i]]
    });

    this._cart
      .updateCart(pk_cart_id, this.cartForm.value)
      .subscribe((data: any) => {
        console.log(data);
      });
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

  updateCart() {}
}
