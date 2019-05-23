import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";

@Component({
  selector: "app-product-all",
  templateUrl: "./product-all.component.html",
  styleUrls: ["./product-all.component.css"]
})
export class ProductAllComponent implements OnInit {
  product_arr: Product[];

  pName: string;
  constructor(private _product: ProductServiceService) {}

  ngOnInit() {
    this._product.getAllProduct().subscribe(
      (data: any) => {
        this.product_arr = data;
        console.log(this.product_arr);
        this.pName = this.product_arr[0].product_name;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("products done");
      }
    );
  }
}
