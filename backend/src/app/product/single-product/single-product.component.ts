import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductServiceService } from "../../services/product-service.service";
import { Product } from "../../models/product";
import { ProductImageServiceService } from "../../services/product-image-service.service";
import { ProductImage } from "../../models/product-image";
import { FeatureServiceService } from "../../services/feature-service.service";
import { Feature } from "../../models/feature";
import { ProductFeature } from "../../models/product-feature";
import { ProductFeatureServiceService } from "../../services/product-feature-service.service";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.css"]
})
export class SingleProductComponent implements OnInit {
  flag: string;
  id: string;
  product_arr: Product[];
  feature_arr: Feature[] = [];
  productFeature_arr: ProductFeature[];
  productImage_arr: ProductImage[];

  product_name: string;
  product_desc: string;
  product_price: string;
  product_sale_price: string;
  feature_name: string;
  feature_value: string;
  public feature_id: number;
  image_url: string[] = [];
  number_arr: number[] = [];
  mainUrl: string;
  Fid: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _product: ProductServiceService,
    private _feature: FeatureServiceService,
    private _productFeature: ProductFeatureServiceService,
    private _productImage: ProductImageServiceService
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;

    this._product.getProduct(id).subscribe(
      (_data: any) => {
        this.product_arr = _data;
        this.product_name = this.product_arr[0].product_name;
        this.product_desc = this.product_arr[0].product_desc;
        this.product_price = this.product_arr[0].product_price;
        this.product_sale_price = this.product_arr[0].product_sale_price;

        console.log(this.product_arr);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single product done");
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
  }

  removeImage() {
    this._productImage.deleteProductImage(this.id).subscribe(
      (data: any) => {
        alert("images deleted");
        this.router.navigate(["/viewProduct"]);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally of remove image");
      }
    );
  }
}
