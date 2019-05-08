import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Order } from "../../models/order";
import { User } from "../../models/user";
import { OrderServiceService } from "../../services/order-service.service";
import { UserServiceService } from "../../services/user-service.service";

@Component({
  selector: "app-update-order",
  templateUrl: "./update-order.component.html",
  styleUrls: ["./update-order.component.css"]
})
export class UpdateOrderComponent implements OnInit {
  flag: string;
  updateOrderForm: FormGroup;
  order_arr: Order[];
  user_arr: User[];
  id: string;
  city: string;
  pincode: string;
  landmark: string;
  line1: string;
  line2: string;
  mobile: string;
  name: string;
  user_id: number;
  date: string;

  constructor(
    private _order: OrderServiceService,
    private _user: UserServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._order.getOrder(id).subscribe(
      (_data: Order[]) => {
        this.order_arr = _data;
        this.updateOrderForm.controls["order_date"].setValue(
          this.order_arr[0].order_date
        );
        this.updateOrderForm.controls["fk_user_id"].setValue(
          this.order_arr[0].fk_user_id
        );
        this.updateOrderForm.controls["address_name"].setValue(
          this.order_arr[0].address_name
        );
        this.updateOrderForm.controls["address_mobile"].setValue(
          this.order_arr[0].address_mobile
        );
        this.updateOrderForm.controls["address_line_1"].setValue(
          this.order_arr[0].address_line_1
        );
        this.updateOrderForm.controls["address_line_2"].setValue(
          this.order_arr[0].address_line_2
        );
        this.updateOrderForm.controls["address_landmark"].setValue(
          this.order_arr[0].address_landmark
        );
        this.updateOrderForm.controls["address_pincode"].setValue(
          this.order_arr[0].address_pincode
        );
        this.updateOrderForm.controls["address_city"].setValue(
          this.order_arr[0].address_city
        );
        console.log(_data);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log();
      }
    );

    this.updateOrderForm = this.fb.group({
      order_date: ["", Validators.required],
      fk_user_id: [""],
      address_name: ["", Validators.required],
      address_mobile: ["", Validators.required],
      address_line_1: ["", Validators.required],
      address_line_2: [""],
      address_landmark: [""],
      address_pincode: ["", Validators.required],
      address_city: ["", Validators.required]
    });

    this._user.getAllUser().subscribe(
      (data: any) => {
        this.user_arr = data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally of user");
      }
    );
  }

  onSubmit() {
    console.warn(this.updateOrderForm.value);
    this._order.updateOrder(this.id, this.updateOrderForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/viewOrder"]);
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
