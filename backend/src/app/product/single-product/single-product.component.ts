import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductServiceService } from "src/app/services/product-service.service";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.css"]
})
export class SingleProductComponent implements OnInit {
  flag: string;
  id: string;
  product_arr: Product[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _product: ProductServiceService
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;

    this._product.getProduct(id).subscribe(
      (_data: any) => {
        this.product_arr = _data;
        console.log(this.product_arr);
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
