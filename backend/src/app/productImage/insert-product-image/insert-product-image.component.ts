import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductImage } from "../../models/product-image";
import { ProductImageServiceService } from "../../services/product-image-service.service";
import { Product } from "../../models/product";
import { ProductServiceService } from "../../services/product-service.service";

@Component({
  selector: "app-insert-product-image",
  templateUrl: "./insert-product-image.component.html",
  styleUrls: ["./insert-product-image.component.css"]
})
export class InsertProductImageComponent implements OnInit {
  insertProductImageForm: FormGroup;
  productImage_arr: ProductImage[];
  product_arr: Product[];
  constructor(
    private _productImage: ProductImageServiceService,
    private _product: ProductServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.insertProductImageForm = this.fb.group({
      image_url: ["", Validators.required],
      fk_product_id: ["", Validators.required]
    });

    this._product.getAllProduct().subscribe(
      (data: any) => {
        this.product_arr = data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally product");
      }
    );
  }

  onSubmit() {
    console.warn(this.insertProductImageForm.value);
    this._productImage
      .insertProductImage(this.insertProductImageForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/viewProductImage"]);
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
