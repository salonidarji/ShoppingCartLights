import { Component, OnInit } from "@angular/core";
import { OrderServiceService } from "../services/order-service.service";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";
import { OrderDetailServiceService } from "../services/order-detail-service.service";
import { OrderDetailHistory } from "../models/order-detail";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReviewServiceService } from "../services/review-service.service";

@Component({
  selector: "app-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.css"]
})
export class OrderHistoryComponent implements OnInit {
  flag: string;
  id: string;

  totalPrice: number = 0;

  public orderDetail_arr: OrderDetailHistory[] = [];
  order_arr: Order[] = [];

  reviewProductForm: FormGroup;

  constructor(
    private _order: OrderServiceService,
    private _orderDetail: OrderDetailServiceService,
    private fb: FormBuilder,
    private _review: ReviewServiceService
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("tokenWeb");

    this._orderDetail.getOrderDetail(this.id).subscribe((data1: any) => {
      this.orderDetail_arr.push(data1);
      console.log(this.orderDetail_arr);
    });

    this.reviewProductForm = this.fb.group({
      review_detail: [""],
      fk_user_id: [this.id],
      fk_product_id: [""]
    });
  }

  deleteOrder(id) {
    this._order.deleteOrder(id).subscribe((data: any) => {
      this._orderDetail.deleteOrderDetail(id).subscribe((data: any) => {
        this._order.deleteOrder(id).subscribe((data: any) => {
          window.location.href = "/orderHistory";
        });
      });
    });
  }

  onReviewProduct(prodId) {
    this.reviewProductForm.controls["fk_product_id"].setValue(prodId);

    console.log(this.reviewProductForm.value);
    this._review.insertReview(this.reviewProductForm.value).subscribe(
      (data: any) => {
        console.log(data);
        this.reviewProductForm.controls["review_detail"].setValue("");
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finaly of review");
      }
    );
  }
}
