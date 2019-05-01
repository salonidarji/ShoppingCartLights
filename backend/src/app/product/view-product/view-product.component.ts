import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductServiceService } from "../../services/product-service.service";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.css"]
})
export class ViewProductComponent implements OnInit {
  product_arr: Product[];
  constructor(private _product: ProductServiceService) {}

  ngOnInit() {
    this._product.getAllProduct().subscribe(
      (_data: any) => {
        this.product_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All products done");
      }
    );
  }

  deleteProduct(id) {
    this._product.deleteProduct(id).subscribe(
      (_data: any) => {
        this.product_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("products deleted");
      }
    );
  }

  singleProduct(id) {
    this._product.getProduct(id).subscribe(
      (_data: any) => {
        this.product_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single product done");
      }
    );
  }
}
