import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { OrderServiceService } from "../services/order-service.service";
import { UserServiceService } from "../services/user-service.service";
import { UserAddress } from "../models/user-address";
import { UserAddressServiceService } from "../services/user-address-service.service";
import { CartServiceService } from "../services/cart-service.service";
import { Cart } from "../models/cart";
import { ProductServiceService } from "../services/product-service.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  id: string;
  flag: string;
  address_arr: UserAddress[];
  selectedAddressId: number;
  newDate: string;

  cart_arr: Cart[] = [];
  public product_arr: any[] = [];
  product_id: number;

  productId: number;
  qty_arr: number[] = [];
  total_arr: number[] = [];
  productPrice_arr: string[] = [];
  productName_arr: string[] = [];

  shipping = 50;
  grandTotal = 0;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _order: OrderServiceService,
    private _user: UserServiceService,
    private _address: UserAddressServiceService,
    private _cart: CartServiceService,
    private _product: ProductServiceService
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("token");
    var date = new Date();
    this.newDate = date.toLocaleDateString("en-US");
    this.checkoutForm = this.fb.group({
      fk_user_id: [this.id],
      order_date: [this.newDate],
      address_name: ["", Validators.required],
      address_mobile: ["", Validators.required],
      address_line_1: ["", Validators.required],
      address_line_2: [""],
      address_landmark: [""],
      address_pincode: ["", Validators.required],
      address_city: ["", Validators.required]
    });

    this._address.getUserAddress(this.id).subscribe(
      (data: any) => {
        this.address_arr = data;
        console.log(this.address_arr);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("address done");
      }
    );

    this._cart.getCartByUser(this.id).subscribe(
      (data: any) => {
        this.cart_arr = data;

        if (this.cart_arr.length > 0) {
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

  onCheckout() {
    console.warn(this.checkoutForm.value);
    this._order.insertOrder(this.checkoutForm.value).subscribe(
      data => {
        console.log(data);
        alert("Your Order is Placed");
        this.router.navigate(["/content"]);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally");
      }
    );
  }

  selectAddress(id) {
    this.selectedAddressId = id;

    console.log(this.address_arr[id]);
    this.checkoutForm = this.fb.group({
      fk_user_id: [this.id],
      order_date: [this.newDate],
      address_name: [this.address_arr[id].address_name, Validators.required],
      address_mobile: [
        this.address_arr[id].address_mobile,
        Validators.required
      ],
      address_line_1: [
        this.address_arr[id].address_line_1,
        Validators.required
      ],
      address_line_2: [this.address_arr[id].address_line_2],
      address_landmark: [this.address_arr[id].address_landmark],
      address_pincode: [
        this.address_arr[id].address_pincode,
        Validators.required
      ],
      address_city: [this.address_arr[id].address_city, Validators.required]
    });
  }
}
