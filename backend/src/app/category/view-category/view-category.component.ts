import { Component, OnInit } from "@angular/core";
import { Category } from "../../models/category";
import { CategoryServiceService } from "../../services/category-service.service";

@Component({
  selector: "app-view-category",
  templateUrl: "./view-category.component.html",
  styleUrls: ["./view-category.component.css"]
})
export class ViewCategoryComponent implements OnInit {
  flag: string;
  category_arr: Category[];
  constructor(private _category: CategoryServiceService) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this._category.getAllCategory().subscribe(
      (_data: any) => {
        this.category_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All categorys done");
      }
    );
  }

  deleteCategory(id) {
    this._category.deleteCategory(id).subscribe(
      (_data: any) => {
        this.category_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("category deleted");
      }
    );
  }

  singleCategory(id) {
    this._category.getCategory(id).subscribe(
      (_data: any) => {
        this.category_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single category done");
      }
    );
  }
}
