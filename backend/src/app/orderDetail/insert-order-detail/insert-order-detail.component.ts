import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { OrderDetail } from "../../models/order-detail";
import { OrderDetailServiceService } from "../../services/order-detail-service.service";
import { Order } from "../../models/order";
import { Product } from "../../models/product";
import { OrderServiceService } from "../../services/order-service.service";
import { ProductServiceService } from "../../services/product-service.service";

@Component({
  selector: "app-insert-order-detail",
  templateUrl: "./insert-order-detail.component.html",
  styleUrls: ["./insert-order-detail.component.css"]
})
export class InsertOrderDetailComponent implements OnInit {
  insertOrderDetailForm: FormGroup;
  orderDetail_arr: OrderDetail[];
  order_arr: Order[];
  product_arr: Product[];
  constructor(
    private _orderDetail: OrderDetailServiceService,
    private _order: OrderServiceService,
    private _product: ProductServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.insertOrderDetailForm = this.fb.group({
      fk_order_id: ["", Validators.required],
      fk_product_id: ["", Validators.required],
      detail_qty: ["", Validators.required],
      detail_price: ["", Validators.required]
    });

    this._product.getAllProduct().subscribe(
      (data: any) => {
        this.product_arr = data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally product");
      }
    );

    this._order.getAllOrder().subscribe(
      (data: any) => {
        this.order_arr = data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally order");
      }
    );
  }

  onSubmit() {
    console.warn(this.insertOrderDetailForm.value);
    this._orderDetail
      .insertOrderDetail(this.insertOrderDetailForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/viewOrderDetail"]);
        },
        function(err) {
          console.log(err);
        },
        function() {
          console.log("finally");
        }
      );
  }
}
