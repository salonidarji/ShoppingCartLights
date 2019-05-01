import { Component, OnInit } from "@angular/core";
import { ProductImageServiceService } from "../../services/product-image-service.service";
import { ProductImage } from "../../models/product-image";

@Component({
  selector: "app-view-product-image",
  templateUrl: "./view-product-image.component.html",
  styleUrls: ["./view-product-image.component.css"]
})
export class ViewProductImageComponent implements OnInit {
  productImage_arr: ProductImage[];
  constructor(private _productImage: ProductImageServiceService) {}

  ngOnInit() {
    this._productImage.getAllProductImage().subscribe(
      (_data: any) => {
        this.productImage_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All product Images done");
      }
    );
  }

  deleteProductImage(id) {
    this._productImage.deleteProductImage(id).subscribe(
      (_data: any) => {
        this.productImage_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("product Images deleted");
      }
    );
  }

  singleProductImage(id) {
    this._productImage.getProductImage(id).subscribe(
      (_data: any) => {
        this.productImage_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single product Image done");
      }
    );
  }
}
