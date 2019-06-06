import { Component, OnInit } from "@angular/core";
import { Category } from "../models/category";
import { CategoryServiceService } from "../services/category-service.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
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
  }
}
