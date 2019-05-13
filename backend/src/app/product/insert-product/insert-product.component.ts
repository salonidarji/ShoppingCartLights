import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Product } from "../../models/product";
import { ProductServiceService } from "../../services/product-service.service";
import { Router } from "@angular/router";
import { Category } from "../../models/category";
import { CategoryServiceService } from "../../services/category-service.service";
import { ProductImageServiceService } from "src/app/services/product-image-service.service";
import { ProductFeatureServiceService } from "src/app/services/product-feature-service.service";
import { FeatureServiceService } from "src/app/services/feature-service.service";
import { Feature } from "src/app/models/feature";

@Component({
  selector: "app-insert-product",
  templateUrl: "./insert-product.component.html",
  styleUrls: ["./insert-product.component.css"]
})
export class InsertProductComponent implements OnInit {
  flag: string;
  insertProductForm: FormGroup;
  product_arr: Product[];
  category_arr: Category[];
  feature_arr: Feature[];
  file: File = null;

  path = "";

  public file_srcs: string[] = [];

  public debug_size_before: string[] = [];

  public debug_size_after: string[] = [];
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private _product: ProductServiceService,
    private _productImage: ProductImageServiceService,
    private _productFeature: ProductFeatureServiceService,
    private _feature: FeatureServiceService,
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
      fk_category_id: [""],
      image_url: [""],
      fk_feature_id: [""],
      feature_value: ["", Validators.required]
    });

    this._category.getAllCategory().subscribe(
      (data: any) => {
        this.category_arr = data;
        console.log(this.category_arr);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("category get done");
      }
    );

    this._feature.getAllFeature().subscribe(
      (dataF: any) => {
        this.feature_arr = dataF;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally feature");
      }
    );
  }

  onFileSelect(event) {
    this.file = <File>event.target.files;
    this.readFiles(this.file);
    // this.insertProductForm.get("image_url").setValue(this.file);
  }

  fileChange(input) {
    this.readFiles(input.files);
  }

  readFile(file, reader, callback) {
    reader.onload = () => {
      callback(reader.result);

      this.insertProductForm.controls.image_url.setValue(reader.result);
      console.log(this.insertProductForm.controls.image_url.value);
      console.log(reader.result);
    };

    reader.readAsDataURL(file);
  }

  readFiles(files, index = 0) {
    // Create the file reader

    let reader = new FileReader();

    // If there is a file

    if (index in files) {
      // Start reading this file

      this.readFile(files[index], reader, result => {
        // Create an img element and add the image file data to it

        var img = document.createElement("img");

        img.src = result;

        // Send this img to the resize function (and wait for callback)

        this.resize(img, 250, 250, (resized_jpeg, before, after) => {
          // For debugging (size in bytes before and after)

          this.debug_size_before.push(before);

          this.debug_size_after.push(after);

          // Add the resized jpeg img source to a list for preview

          // This is also the file you want to upload. (either as a

          // base64 string or img.src = resized_jpeg if you prefer a file).

          this.file_srcs.push(resized_jpeg);

          // Read the next file;

          this.readFiles(files, index + 1);
        });
      });
    } else {
      // When all files are done This forces a change detection

      this.changeDetectorRef.detectChanges();
    }
  }

  resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
    // This will wait until the img is loaded before calling this function

    return (img.onload = () => {
      // Get the images current width and height

      var width = img.width;

      var height = img.height;

      // Set the WxH to fit the Max values (but maintain proportions)

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;

          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;

          height = MAX_HEIGHT;
        }
      }

      // create a canvas object

      var canvas = document.createElement("canvas");

      // Set the canvas to the new calculated dimensions

      canvas.width = width;

      canvas.height = height;

      var ctx = canvas.getContext("2d");

      ctx.drawImage(img, 0, 0, width, height);

      // Get this encoded as a jpeg

      // IMPORTANT: 'jpeg' NOT 'jpg'

      var dataUrl = canvas.toDataURL("image/jpeg");

      // callback with the results

      callback(dataUrl, img.src.length, dataUrl.length);
    });
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
      .insertProductImage(this.insertProductForm.value)
      .subscribe(
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

    this._productFeature
      .insertProductFeature(this.insertProductForm.value)
      .subscribe(
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
