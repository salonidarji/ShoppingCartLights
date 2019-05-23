import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product_arr: Product[];
  constructor(private _product: ProductServiceService) {}

  ngOnInit() {
    this._product.getAllProduct().subscribe((data: any) => {
      this.product_arr = data;
    });
  }
}
