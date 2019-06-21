import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PaymentServiceService } from "../services/payment-service.service";
import { UserServiceService } from "../services/user-service.service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { User } from "../models/user";

@Component({
  selector: "app-pay-success",
  templateUrl: "./pay-success.component.html",
  styleUrls: ["./pay-success.component.css"]
})
export class PaySuccessComponent implements OnInit {
  payId: string;
  id: string;
  userForm: FormGroup;
  user_arr: User[];

  constructor(
    private route: ActivatedRoute,
    private _payment: PaymentServiceService,
    private _user: UserServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.payId = this.route.snapshot.paramMap.get("payId");
    this.id = localStorage.getItem("token");

    this.userForm = this.fb.group({
      user_email: [this.id]
    });

    if (this.payId != "") {
      this._payment
        .paymentVerified(this.payId, this.userForm.value)
        .subscribe((data: any) => {
          console.log("payment verified with email");
        });
    }
  }
}
