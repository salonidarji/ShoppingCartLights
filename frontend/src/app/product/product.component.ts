import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";
import { CartServiceService } from "../services/cart-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product_arr: Product[];
  insertCartForm: FormGroup;
  id: string;

  constructor(
    private _product: ProductServiceService,
    private _cart: CartServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this._product.getAllProduct().subscribe((data: any) => {
      this.product_arr = data;
    });

    this.id = localStorage.getItem("token");
    console.log("id:" + this.id);
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
          this.router.navigate(["/"]);
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
