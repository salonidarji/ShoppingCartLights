import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductImage } from "../../models/product-image";
import { ProductImageServiceService } from "../../services/product-image-service.service";
import { Product } from "../../models/product";
import { ProductServiceService } from "../../services/product-service.service";

@Component({
  selector: "app-update-product-image",
  templateUrl: "./update-product-image.component.html",
  styleUrls: ["./update-product-image.component.css"]
})
export class UpdateProductImageComponent implements OnInit {
  updateProductImageForm: FormGroup;
  productImage_arr: ProductImage[];
  product_arr: Product[];
  id: string;
  constructor(
    private _productImage: ProductImageServiceService,
    private _product: ProductServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._productImage.getProductImage(id).subscribe(
      (_data: ProductImage[]) => {
        this.productImage_arr = _data;
        this.updateProductImageForm.controls["image_url"].setValue(
          this.productImage_arr[0].image_url
        );
        this.updateProductImageForm.controls["fk_product_id"].setValue(
          this.productImage_arr[0].fk_product_id
        );

        console.log(_data);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log();
      }
    );

    this.updateProductImageForm = this.fb.group({
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
    console.warn(this.updateProductImageForm.value);
    this._productImage
      .updateProductImage(this.id, this.updateProductImageForm.value)
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
