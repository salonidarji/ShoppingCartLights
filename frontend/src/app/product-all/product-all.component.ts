import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";
import { CartServiceService } from "../services/cart-service.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-product-all",
  templateUrl: "./product-all.component.html",
  styleUrls: ["./product-all.component.css"]
})
export class ProductAllComponent implements OnInit {
  product_arr: Product[];
  insertCartForm: FormGroup;
  id: string;
  pName: string;
  constructor(
    private _product: ProductServiceService,
    private _cart: CartServiceService,
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
}
