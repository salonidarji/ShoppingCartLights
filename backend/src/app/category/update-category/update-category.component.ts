import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Category } from "../../models/category";
import { CategoryServiceService } from "../../services/category-service.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-category",
  templateUrl: "./update-category.component.html",
  styleUrls: ["./update-category.component.css"]
})
export class UpdateCategoryComponent implements OnInit {
  flag: string;
  updateCategoryForm: FormGroup;
  category_arr: Category[];
  id: string;
  constructor(
    private _category: CategoryServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._category.getCategory(id).subscribe(
      (_data: Category[]) => {
        this.category_arr = _data;
        this.updateCategoryForm.controls["category_name"].setValue(
          this.category_arr[0].category_name
        );
        this.updateCategoryForm.controls["fk_parent_id"].setValue(
          this.category_arr[0].fk_parent_id
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

    this.updateCategoryForm = this.fb.group({
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
    console.warn(this.updateCategoryForm.value);
    this._category
      .updateCategory(this.id, this.updateCategoryForm.value)
      .subscribe(
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
