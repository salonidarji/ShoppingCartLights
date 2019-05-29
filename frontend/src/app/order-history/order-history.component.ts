import { Component, OnInit } from "@angular/core";
import { OrderServiceService } from "../services/order-service.service";
import { Order } from "../models/order";
import { Product } from "../models/product";
import { ProductServiceService } from "../services/product-service.service";
import { OrderDetailServiceService } from "../services/order-detail-service.service";
import { OrderDetail } from "../models/order-detail";

@Component({
  selector: "app-order-history",
  templateUrl: "./order-history.component.html",
  styleUrls: ["./order-history.component.css"]
})
export class OrderHistoryComponent implements OnInit {
  flag: string;
  id: string;

  totalPrice: number = 0;

  orderDetail_arr: OrderDetail[];
  order_arr: Order[];
  product_arr: Product[] = [];
  constructor(
    private _order: OrderServiceService,
    private _orderDetail: OrderDetailServiceService,
    private _product: ProductServiceService
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("token");

    this._order.getOrder(this.id).subscribe(
      (data: any) => {
        this.order_arr = data;
        console.log(this.order_arr);
        for (var i = 0; i < this.order_arr.length; i++) {
          this._orderDetail
            .getOrderDetail(this.order_arr[i].pk_order_id)
            .subscribe(
              (data: any) => {
                this.orderDetail_arr = data;
                console.log(this.orderDetail_arr);
                for (var j = 0; j < this.orderDetail_arr.length; j++) {
                  this._product
                    .getProduct(this.orderDetail_arr[j].fk_product_id)
                    .subscribe(
                      (data: any) => {
                        this.product_arr = data;
                        console.log(this.product_arr);
                        this.totalPrice +=
                          <any>this.product_arr[0].product_sale_price *
                          this.orderDetail_arr[0].detail_qty;
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
  }
}
