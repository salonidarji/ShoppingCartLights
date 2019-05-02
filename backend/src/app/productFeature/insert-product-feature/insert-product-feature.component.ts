import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductFeature } from "../../models/product-feature";
import { ProductFeatureServiceService } from "../../services/product-feature-service.service";
import { Product } from "src/app/models/product";
import { Feature } from "src/app/models/feature";
import { ProductServiceService } from "src/app/services/product-service.service";
import { FeatureServiceService } from "src/app/services/feature-service.service";

@Component({
  selector: "app-insert-product-feature",
  templateUrl: "./insert-product-feature.component.html",
  styleUrls: ["./insert-product-feature.component.css"]
})
export class InsertProductFeatureComponent implements OnInit {
  insertProductFeatureForm: FormGroup;
  productFeature_arr: ProductFeature[];
  product_arr: Product[];
  feature_arr: Feature[];
  constructor(
    private _productFeature: ProductFeatureServiceService,
    private _product: ProductServiceService,
    private _feature: FeatureServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.insertProductFeatureForm = this.fb.group({
      fk_feature_id: [""],
      fk_product_id: [""],
      feature_value: ["", Validators.required]
    });

    this._product.getAllProduct().subscribe(
      (dataP: any) => {
        this.product_arr = dataP;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally product");
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

  onSubmit() {
    console.warn(this.insertProductFeatureForm.value);
    this._productFeature
      .insertProductFeature(this.insertProductFeatureForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/viewProductFeature"]);
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
