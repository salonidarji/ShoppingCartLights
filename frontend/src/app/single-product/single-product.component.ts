import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductServiceService } from "../services/product-service.service";
import { Product } from "../models/product";
import { ProductFeatureServiceService } from "../services/product-feature-service.service";
import { ProductFeature } from "../models/product-feature";
import { Feature } from "../models/feature";
import { FeatureServiceService } from "../services/feature-service.service";
import { ProductImage } from "../models/product-image";
import { ProductImageServiceService } from "../services/product-image-service.service";
import { CartServiceService } from "../services/cart-service.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.css"]
})
export class SingleProductComponent implements OnInit {
  insertCartForm: FormGroup;

  product_arr: Product[];
  feature_arr: Feature[] = [];
  productFeature_arr: ProductFeature[];
  productImage_arr: ProductImage[];

  product_price: string;
  product_sale_price: string;
  product_name: string;
  image_url: string[] = [];
  number_arr: number[] = [];
  mainUrl: string;
  public feature_id: number;
  Fid: number;
  userId: string;
  productId: string;
  imgNew: string = "";
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private _product: ProductServiceService,
    private _productFeature: ProductFeatureServiceService,
    private _feature: FeatureServiceService,
    private _productImage: ProductImageServiceService,
    private _cart: CartServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("uId");
    this.productId = id;
    this.userId = localStorage.getItem("token");
    this._product.getProduct(id).subscribe(
      (data: any) => {
        this.product_arr = data;
        this.product_price = this.product_arr[0].product_price;
        this.product_sale_price = this.product_arr[0].product_sale_price;
        this.product_name = this.product_arr[0].product_name;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally product");
      }
    );

    this._productFeature.getProductFeature(id).subscribe(
      (_data: any) => {
        this.productFeature_arr = _data;
        var i;
        for (i = 0; i < this.productFeature_arr.length; i++) {
          console.log(this.productFeature_arr[i].fk_feature_id);
          this.feature_id = this.productFeature_arr[i].fk_feature_id;
          console.log(this.productFeature_arr);
          this.number_arr.push(i);
          this.Fid = this.feature_id;

          console.log("id got:" + this.Fid);
          this._feature.getFeature(this.Fid).subscribe(
            (_data: any) => {
              console.log(this.Fid);
              this.feature_arr.push(_data);
              console.log(this.feature_arr);
            },
            function(err) {
              console.log(err);
            },
            function() {
              console.log("feature done");
            }
          );
          console.log(this.number_arr);
        }
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("product feature done");
      }
    );

    this._productImage.getProductImage(id).subscribe(
      (_data: any) => {
        console.log(_data);
        this.productImage_arr = _data;
        console.log(this.productImage_arr[0]);
        if (_data != "undefined") {
          this.mainUrl = this.productImage_arr[0].image_url;
          for (var i = 1; i < this.productImage_arr.length; i++) {
            this.image_url.push(this.productImage_arr[i].image_url);
          }
        }
        console.log(this.image_url);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single product image done");
      }
    );

    console.log("quantity:" + this.quantity);
  }

  replaceImage(image) {
    this.imgNew = image;
  }

  addToCart(product_id) {
    if (this.userId != "") {
      this.insertCartForm = this.fb.group({
        fk_user_email_id: [this.userId],
        fk_product_id: [product_id],
        product_qty: [this.quantity]
      });

      this._cart.insertCart(this.insertCartForm.value).subscribe(
        (data: any) => {
          console.log(this.insertCartForm.value);
          this.router.navigate(["/cart"]);
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

  checkValue() {
    if (this.quantity <= 0) {
      this.quantity = 1;
    }
  }
}
