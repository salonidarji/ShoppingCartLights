import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Category } from "../../models/category";
import { CategoryServiceService } from "../../services/category-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-insert-category",
  templateUrl: "./insert-category.component.html",
  styleUrls: ["./insert-category.component.css"]
})
export class InsertCategoryComponent implements OnInit {
  flag: string;
  insertCategoryForm: FormGroup;
  category_arr: Category[];
  constructor(
    private _category: CategoryServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this.insertCategoryForm = this.fb.group({
      category_name: ["", Validators.required],
      fk_parent_id: [""]
    });

    this._category.getAllCategory().subscribe(
      (data: any) => {
        this.category_arr = data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("all category done");
      }
    );
  }

  onSubmit() {
    console.warn(this.insertCategoryForm.value);
    this._category.insertCategory(this.insertCategoryForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/viewCategory"]);
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
