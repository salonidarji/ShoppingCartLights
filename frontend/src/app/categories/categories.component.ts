import { Component, OnInit } from "@angular/core";
import { Category } from "../models/category";
import { CategoryServiceService } from "../services/category-service.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"]
})
export class CategoriesComponent implements OnInit {
  category_arr: Category[];
  constructor(private _category: CategoryServiceService) {}

  ngOnInit() {
    this._category.getAllCategory().subscribe(
      (data: any) => {
        this.category_arr = data;
        console.log("inside:" + this.category_arr);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally category");
      }
    );

    console.log("outside:" + this.category_arr);
  }
}
