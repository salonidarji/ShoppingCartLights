import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { OrderDetail } from "../../models/order-detail";
import { OrderDetailServiceService } from "../../services/order-detail-service.service";
import { Order } from "../../models/order";
import { Product } from "../../models/product";
import { OrderServiceService } from "../../services/order-service.service";
import { ProductServiceService } from "../../services/product-service.service";

@Component({
  selector: "app-update-order-detail",
  templateUrl: "./update-order-detail.component.html",
  styleUrls: ["./update-order-detail.component.css"]
})
export class UpdateOrderDetailComponent implements OnInit {
  flag: string;
  updateOrderDetailForm: FormGroup;
  orderDetail_arr: OrderDetail[];
  order_arr: Order[];
  product_arr: Product[];
  order_id: string;
  product_id: string;
  qty: number;
  price: string;
  id: string;
  constructor(
    private _orderDetail: OrderDetailServiceService,
    private _order: OrderServiceService,
    private _product: ProductServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._orderDetail.getOrderDetail(id).subscribe(
      (_data: OrderDetail[]) => {
        this.orderDetail_arr = _data;
        this.updateOrderDetailForm.controls["fk_order_id"].setValue(
          this.orderDetail_arr[0].fk_order_id
        );
        this.updateOrderDetailForm.controls["fk_product_id"].setValue(
          this.orderDetail_arr[0].fk_product_id
        );
        this.updateOrderDetailForm.controls["detail_qty"].setValue(
          this.orderDetail_arr[0].detail_qty
        );
        this.updateOrderDetailForm.controls["detail_price"].setValue(
          this.orderDetail_arr[0].detail_price
        );
        console.log(this.orderDetail_arr);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log();
      }
    );

    this.updateOrderDetailForm = this.fb.group({
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
    console.warn(this.updateOrderDetailForm.value);
    /* this._orderDetail
      .updateOrderDetail(this.id, this.updateOrderDetailForm.value)
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
      ); */
  }
}
