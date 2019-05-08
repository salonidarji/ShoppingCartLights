import { Component, OnInit } from "@angular/core";
import { OrderServiceService } from "../../services/order-service.service";
import { Order } from "../../models/order";

@Component({
  selector: "app-view-order",
  templateUrl: "./view-order.component.html",
  styleUrls: ["./view-order.component.css"]
})
export class ViewOrderComponent implements OnInit {
  flag: string;
  order_arr: Order[];
  constructor(private _order: OrderServiceService) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this._order.getAllOrder().subscribe(
      (_data: any) => {
        this.order_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All orders done");
      }
    );
  }

  deleteOrder(id) {
    this._order.deleteOrder(id).subscribe(
      (_data: any) => {
        this.order_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("orders deleted");
      }
    );
  }

  singleOrder(id) {
    this._order.getOrder(id).subscribe(
      (_data: any) => {
        this.order_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single order done");
      }
    );
  }
}
