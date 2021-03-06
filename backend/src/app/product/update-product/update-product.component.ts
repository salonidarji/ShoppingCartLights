import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Product } from "../../models/product";
import { ProductServiceService } from "../../services/product-service.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Category } from "../../models/category";
import { CategoryServiceService } from "src/app/services/category-service.service";
import { ProductImageServiceService } from "src/app/services/product-image-service.service";
import { ProductImage } from "src/app/models/product-image";
import { ProductFeatureServiceService } from "src/app/services/product-feature-service.service";
import { ProductFeature } from "src/app/models/product-feature";
import { FeatureServiceService } from "src/app/services/feature-service.service";
import { Feature } from "src/app/models/feature";

@Component({
  selector: "app-update-product",
  templateUrl: "./update-product.component.html",
  styleUrls: ["./update-product.component.css"]
})
export class UpdateProductComponent implements OnInit {
  flag: string;
  updateProductForm: FormGroup;
  product_arr: Product[];
  productFeature_arr: ProductFeature[];
  productImage_arr: ProductImage[];
  category_arr: Category[];
  feature_arr: Feature[];
  id: string;
  file: File = null;
  pImageId: number;
  pFeatureId: number;

  model = {
    image_url: [],
    fk_product_id: this.route.snapshot.paramMap.get("uId")
  };

  path = "";

  public file_srcs: string[] = [];

  public debug_size_before: string[] = [];

  public debug_size_after: string[] = [];
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private _product: ProductServiceService,
    private _productImage: ProductImageServiceService,
    private _productFeature: ProductFeatureServiceService,
    private _feature: FeatureServiceService,
    private _category: CategoryServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._product.getProduct(id).subscribe(
      (_data: Product[]) => {
        this.product_arr = _data;
        this.updateProductForm.controls["product_name"].setValue(
          this.product_arr[0].product_name
        );
        this.updateProductForm.controls["product_desc"].setValue(
          this.product_arr[0].product_desc
        );
        this.updateProductForm.controls["product_price"].setValue(
          this.product_arr[0].product_price
        );
        this.updateProductForm.controls["product_sale_price"].setValue(
          this.product_arr[0].product_sale_price
        );
        this.updateProductForm.controls["fk_category_id"].setValue(
          this.product_arr[0].fk_category_id
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

    this._productImage.getProductImage(id).subscribe(
      (_data: ProductImage[]) => {
        this.productImage_arr = _data;
        console.log(this.productImage_arr);
        this.pImageId = this.productImage_arr[0].pk_image_id;
        console.log("pimage:" + this.pImageId);
        // this.updateProductForm.controls["image_url"].setValue(
        //   this.productImage_arr[0].image_url
        // );
        console.log(_data);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log();
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

    this._productFeature.getProductFeature(id).subscribe(
      (_data: ProductFeature[]) => {
        this.productFeature_arr = _data;
        console.log(this.productFeature_arr);
        this.pFeatureId = this.productFeature_arr[0].pk_product_feature_id;

        this.updateProductForm.controls["fk_feature_id"].setValue(
          this.productFeature_arr[0].fk_feature_id
        );
        this.updateProductForm.controls["feature_value"].setValue(
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

    this.updateProductForm = this.fb.group({
      product_name: ["", Validators.required],
      product_desc: ["", Validators.required],
      product_price: ["", [Validators.required]],
      product_sale_price: ["", Validators.required],
      fk_category_id: [""],
      fk_product_id: [this.id],
      fk_feature_id: [""],
      feature_value: ["", Validators.required]
    });

    this._category.getAllCategory().subscribe(
      (data: any) => {
        this.category_arr = data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("category get done");
      }
    );
  }

  onSubmit() {
    console.warn(this.updateProductForm.value);
    this._product
      .updateProduct(this.id, this.updateProductForm.value)
      .subscribe(
        data => {
          // console.log(data);
          this._productFeature
            .updateProductFeature(this.pFeatureId, this.updateProductForm.value)
            .subscribe(
              data => {
                // console.log(data);
                this.router.navigate(["/viewProduct"]);
              },
              function(err) {
                console.log(err);
              },
              function() {
                console.log("finally");
              }
            );
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
