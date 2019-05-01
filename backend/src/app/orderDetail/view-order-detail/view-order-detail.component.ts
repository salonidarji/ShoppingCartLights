import { Component, OnInit } from "@angular/core";
import { OrderDetail } from "../../models/order-detail";
import { OrderDetailServiceService } from "../../services/order-detail-service.service";

@Component({
  selector: "app-view-order-detail",
  templateUrl: "./view-order-detail.component.html",
  styleUrls: ["./view-order-detail.component.css"]
})
export class ViewOrderDetailComponent implements OnInit {
  orderDetail_arr: OrderDetail[];
  constructor(private _orderDetail: OrderDetailServiceService) {}

  ngOnInit() {
    this._orderDetail.getAllOrderDetail().subscribe(
      (_data: any) => {
        this.orderDetail_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All order Details done");
      }
    );
  }

  deleteOrderDetail(id) {
    this._orderDetail.deleteOrderDetail(id).subscribe(
      (_data: any) => {
        this.orderDetail_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("order Details deleted");
      }
    );
  }

  singleOrderDetail(id) {
    this._orderDetail.getOrderDetail(id).subscribe(
      (_data: any) => {
        this.orderDetail_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single order Detail done");
      }
    );
  }
}
