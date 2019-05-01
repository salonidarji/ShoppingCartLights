import { Component, OnInit } from "@angular/core";
import { ProductFeatureServiceService } from "../../services/product-feature-service.service";
import { ProductFeature } from "../../models/product-feature";

@Component({
  selector: "app-view-product-feature",
  templateUrl: "./view-product-feature.component.html",
  styleUrls: ["./view-product-feature.component.css"]
})
export class ViewProductFeatureComponent implements OnInit {
  productFeature_arr: ProductFeature[];
  constructor(private _productFeature: ProductFeatureServiceService) {}

  ngOnInit() {
    this._productFeature.getAllProductFeature().subscribe(
      (_data: any) => {
        this.productFeature_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All product Features done");
      }
    );
  }

  deleteProductFeature(id) {
    this._productFeature.deleteProductFeature(id).subscribe(
      (_data: any) => {
        this.productFeature_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("product Features deleted");
      }
    );
  }

  singleProductFeature(id) {
    this._productFeature.getProductFeature(id).subscribe(
      (_data: any) => {
        this.productFeature_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single product Feature done");
      }
    );
  }
}
