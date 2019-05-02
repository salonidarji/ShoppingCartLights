import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Order } from "../../models/order";
import { User } from "../../models/user";
import { OrderServiceService } from "../../services/order-service.service";
import { UserServiceService } from "../../services/user-service.service";

@Component({
  selector: "app-insert-order",
  templateUrl: "./insert-order.component.html",
  styleUrls: ["./insert-order.component.css"]
})
export class InsertOrderComponent implements OnInit {
  insertOrderForm: FormGroup;
  order_arr: Order[];
  user_arr: User[];
  constructor(
    private _order: OrderServiceService,
    private _user: UserServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.insertOrderForm = this.fb.group({
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
    console.warn(this.insertOrderForm.value);
    this._order.insertOrder(this.insertOrderForm.value).subscribe(
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
