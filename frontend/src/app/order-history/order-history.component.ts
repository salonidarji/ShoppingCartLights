import { Component, OnInit } from "@angular/core";
import { OrderServiceService } from "../services/order-service.service";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";
import { OrderDetailServiceService } from "../services/order-detail-service.service";
import { OrderDetail } from "../models/order-detail";
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

  public orderDetail_arr: OrderDetail[] = [];
  order_arr: Order[] = [];
  product_arr: Product[] = [];

  reviewProductForm: FormGroup;

  constructor(
    private _order: OrderServiceService,
    private _orderDetail: OrderDetailServiceService,
    private _product: ProductServiceService,
    private fb: FormBuilder,
    private _review: ReviewServiceService
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("tokenWeb");

    this._order.getOrder(this.id).subscribe(
      (data: any) => {
        this.order_arr = data;
        if (this.order_arr.length > 0) {
          this._orderDetail
            .getOrderDetail(this.order_arr[0].pk_order_id)
            .subscribe(
              (data: any) => {
                this.orderDetail_arr = data;
                for (var j = 0; j < this.orderDetail_arr.length; j++) {
                  this._product
                    .getProduct(this.orderDetail_arr[j].fk_product_id)
                    .subscribe(
                      (data: any) => {
                        this.product_arr.push(data);

                        for (var i = 0; i < this.product_arr.length; i++) {
                          this.totalPrice += parseInt(
                            this.product_arr[i][0].product_sale_price
                          );
                        }
                      },
                      function(err) {
                        console.log(err);
                      },
                      function() {
                        console.log("product done");
                      }
                    );
                }
              },
              function(err) {
                console.log(err);
              },
              function() {
                console.log("order detail done");
              }
            );
        }
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("order done");
      }
    );

    this.reviewProductForm = this.fb.group({
      review_detail: [""],
      fk_user_id: [this.id],
      fk_product_id: [""]
    });
  }

  deleteOrder(id) {
    this._order.deleteOrder(id).subscribe((data: any) => {
      this._orderDetail.deleteOrderDetail(id).subscribe((data: any) => {
        alert("Order Canceled Successfully");
        this.ngOnInit();
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
