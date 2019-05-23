import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoriesComponent } from "../categories/categories.component";
import { CategoryServiceService } from "../services/category-service.service";
import { Product } from "../models/product";

@Component({
  selector: "app-product-category",
  templateUrl: "./product-category.component.html",
  styleUrls: ["./product-category.component.css"]
})
export class ProductCategoryComponent implements OnInit {
  product_arr: Product;
  pName: string;
  constructor(
    private route: ActivatedRoute,
    private _category: CategoryServiceService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("uId");

    this._category.getProductByCategory(id).subscribe(
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
