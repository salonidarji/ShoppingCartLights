import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Product } from "../../models/product";
import { ProductServiceService } from "../../services/product-service.service";
import { Router } from "@angular/router";
import { Category } from "../../models/category";
import { CategoryServiceService } from "../../services/category-service.service";
import { ProductImageServiceService } from "../../services/product-image-service.service";

@Component({
  selector: "app-insert-product",
  templateUrl: "./insert-product.component.html",
  styleUrls: ["./insert-product.component.css"]
})
export class InsertProductComponent implements OnInit {
  flag: string;
  insertProductForm: FormGroup;
  insertProductImageForm: FormGroup;
  product_arr: Product[];
  category_arr: Category[];
  constructor(
    private _product: ProductServiceService,
    private _productImage: ProductImageServiceService,
    private _category: CategoryServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this.insertProductForm = this.fb.group({
      product_name: ["", Validators.required],
      product_desc: ["", Validators.required],
      product_price: ["", [Validators.required]],
      product_sale_price: ["", Validators.required],
      fk_category_id: [""]
    });
    this.insertProductImageForm = this.fb.group({
      image_url: ["", Validators.required]
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
  file: File;
  onFileUpload(event) {
    this.file = event.target.files[0];
    console.log(this.file.name);
    TODO: this.insertProductImageForm.controls["image_url"].setValue(
      this.file.name
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

    this._productImage
      .insertProductImage(this.insertProductImageForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/viewProduct"]);
        },
        function(err) {
          console.log(err);
        },
        function() {
          console.log("finally product image");
        }
      );
  }
}
