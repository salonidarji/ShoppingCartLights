import { Component, OnInit } from "@angular/core";
import { OrderDetail } from "../../models/order-detail";
import { OrderDetailServiceService } from "../../services/order-detail-service.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-view-order-detail",
  templateUrl: "./view-order-detail.component.html",
  styleUrls: ["./view-order-detail.component.css"]
})
export class ViewOrderDetailComponent implements OnInit {
  flag: string;
  orderDetail_arr: OrderDetail[];
  status: string;
  statusForm: FormGroup;

  constructor(
    private _orderDetail: OrderDetailServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

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

  onStatus(id) {
    this.statusForm = this.fb.group({
      order_status: [this.status]
    });

    this._orderDetail
      .updateStatus(id, this.statusForm.value)
      .subscribe((data: any) => {
        this.ngOnInit();
      });
  }
}
