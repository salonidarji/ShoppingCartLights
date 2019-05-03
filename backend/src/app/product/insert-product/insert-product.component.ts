import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Product } from "../../models/product";
import { ProductServiceService } from "../../services/product-service.service";
import { Router } from "@angular/router";
import { Category } from "../../models/category";
import { CategoryServiceService } from "src/app/services/category-service.service";

@Component({
  selector: "app-insert-product",
  templateUrl: "./insert-product.component.html",
  styleUrls: ["./insert-product.component.css"]
})
export class InsertProductComponent implements OnInit {
  insertProductForm: FormGroup;
  product_arr: Product[];
  category_arr: Category[];
  constructor(
    private _product: ProductServiceService,
    private _category: CategoryServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.insertProductForm = this.fb.group({
      product_name: ["", Validators.required],
      product_desc: ["", Validators.required],
      product_price: ["", [Validators.required]],
      product_sale_price: ["", Validators.required],
      fk_category_id: [""]
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
    console.warn(this.insertProductForm.value);
    this._product.insertProduct(this.insertProductForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/viewProduct"]);
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