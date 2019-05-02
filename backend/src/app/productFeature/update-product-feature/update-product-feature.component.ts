import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductFeature } from "../../models/product-feature";
import { ProductFeatureServiceService } from "../../services/product-feature-service.service";
import { Product } from "src/app/models/product";
import { Feature } from "src/app/models/feature";
import { ProductServiceService } from "src/app/services/product-service.service";
import { FeatureServiceService } from "src/app/services/feature-service.service";

@Component({
  selector: "app-update-product-feature",
  templateUrl: "./update-product-feature.component.html",
  styleUrls: ["./update-product-feature.component.css"]
})
export class UpdateProductFeatureComponent implements OnInit {
  updateProductFeatureForm: FormGroup;
  productFeature_arr: ProductFeature[];
  product_arr: Product[];
  feature_arr: Feature[];
  id: string;
  constructor(
    private _productFeature: ProductFeatureServiceService,
    private _product: ProductServiceService,
    private _feature: FeatureServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._productFeature.getProductFeature(id).subscribe(
      (_data: ProductFeature[]) => {
        this.productFeature_arr = _data;
        this.updateProductFeatureForm.controls["fk_feature_id"].setValue(
          this.productFeature_arr[0].fk_feature_id
        );
        this.updateProductFeatureForm.controls["fk_product_id"].setValue(
          this.productFeature_arr[0].fk_product_id
        );
        this.updateProductFeatureForm.controls["feature_value"].setValue(
          this.productFeature_arr[0].feature_value
        );
        console.log(_data);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log();
      }
    );

    this.updateProductFeatureForm = this.fb.group({
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
    console.warn(this.updateProductFeatureForm.value);
    this._productFeature
      .updateProductFeature(this.id, this.updateProductFeatureForm.value)
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
