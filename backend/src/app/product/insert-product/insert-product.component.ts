import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Product } from "../../models/product";
import { ProductServiceService } from "../../services/product-service.service";
import { Router } from "@angular/router";
import { Category } from "../../models/category";
import { CategoryServiceService } from "../../services/category-service.service";
import { ProductImageServiceService } from "src/app/services/product-image-service.service";
import { ProductFeatureServiceService } from "src/app/services/product-feature-service.service";
import { FeatureServiceService } from "src/app/services/feature-service.service";
import { Feature } from "src/app/models/feature";

@Component({
  selector: "app-insert-product",
  templateUrl: "./insert-product.component.html",
  styleUrls: ["./insert-product.component.css"]
})
export class InsertProductComponent implements OnInit {
  flag: string;
  insertProductForm: FormGroup;
  product_arr: Product[];
  category_arr: Category[];
  feature_arr: Feature[];
  file: File = null;

  constructor(
    private _product: ProductServiceService,
    private _productImage: ProductImageServiceService,
    private _productFeature: ProductFeatureServiceService,
    private _feature: FeatureServiceService,
    private _category: CategoryServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this.insertProductForm = this.fb.group({
      product_name: ["", Validators.required],
      product_desc: ["", Validators.required],
      product_price: ["", [Validators.required]],
      product_sale_price: ["", Validators.required],
      fk_category_id: [""],
      image_url: [""],
      fk_feature_id: [""],
      feature_value: ["", Validators.required]
    });

    this._category.getAllCategory().subscribe(
      (data: any) => {
        this.category_arr = data;
        console.log(this.category_arr);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("category get done");
      }
    );

    this._feature.getAllFeature().subscribe(
      (dataF: any) => {
        this.feature_arr = dataF;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally feature");
      }
    );
  }

  onFileSelect(event) {
    this.file = <File>event.target.files[0];
    // this.insertProductForm.get("image_url").setValue(this.file);
  }

  onSubmit() {
    console.warn(this.insertProductForm.value);
    this._product.insertProduct(this.insertProductForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/viewProduct"]);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally");
      }
    );

    this._productImage
      .insertProductImage(this.insertProductForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/viewProduct"]);
        },
        function(err) {
          console.log(err);
        },
        function() {
          console.log("finally");
        }
      );

    this._productFeature
      .insertProductFeature(this.insertProductForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/viewProduct"]);
        },
        function(err) {
          console.log(err);
        },
        function() {
          console.log("finally");
        }
      );
  }
}
