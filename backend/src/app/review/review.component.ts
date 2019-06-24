import { Component, OnInit } from "@angular/core";
import { ReviewServiceService } from "../services/review-service.service";
import { Review } from "../models/review";

@Component({
  selector: "app-review",
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.css"]
})
export class ReviewComponent implements OnInit {
  review_arr: Review[];
  flag: string;

  constructor(private _review: ReviewServiceService) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this._review.getAllReview().subscribe((data: any) => {
      this.review_arr = data;
    });
  }

  deleteReview(id) {
    this._review.deleteReview(id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }
}
