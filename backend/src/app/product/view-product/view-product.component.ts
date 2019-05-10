import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductServiceService } from "../../services/product-service.service";

@Component({
  selector: "app-view-product",
  templateUrl: "./view-product.component.html",
  styleUrls: ["./view-product.component.css"]
})
export class ViewProductComponent implements OnInit {
  flag: string;
  product_arr: Product[];
  constructor(private _product: ProductServiceService) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this._product.getAllProduct().subscribe(
      (_data: any) => {
        this.product_arr = _data;
        console.log(this.product_arr);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All products done");
      }
    );
  }

  deleteProduct(p_id, pi_id, pf_id) {
    this._product.deleteProduct(p_id, pi_id, pf_id).subscribe(
      (_data: any) => {
        // this.product_arr = _data;
        // console.log(this.product_arr);
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
