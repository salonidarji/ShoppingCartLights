import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { OrderServiceService } from "../services/order-service.service";
import { UserServiceService } from "../services/user-service.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"]
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  id: string;
  flag: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _order: OrderServiceService,
    private _user: UserServiceService
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("token");
    var date = new Date();
    var newDate = date.toLocaleDateString("en-US");
    this.checkoutForm = this.fb.group({
      fk_user_id: [this.id],
      order_date: [newDate],
      address_name: ["", Validators.required],
      address_mobile: ["", Validators.required],
      address_line_1: ["", Validators.required],
      address_line_2: [""],
      address_landmark: [""],
      address_pincode: ["", Validators.required],
      address_city: ["", Validators.required]
    });
  }

  onCheckout() {
    console.warn(this.checkoutForm.value);
    this._order.insertOrder(this.checkoutForm.value).subscribe(
      data => {
        console.log(data);
        alert("Your Order is Placed");
        this.router.navigate(["/content"]);
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
