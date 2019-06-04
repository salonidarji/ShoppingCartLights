import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Admin } from "../models/admin";
import { AdminServiceService } from "../services/admin-service.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"]
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  admin_arr: Admin[];
  constructor(private fb: FormBuilder, private _admin: AdminServiceService) {}

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      admin_email: ["", [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.warn(this.forgotPasswordForm.value);

    this._admin
      .getAdmin(this.forgotPasswordForm.controls.admin_email.value)
      .subscribe(
        (data: any) => {
          this.admin_arr = data;
          console.log("array:" + this.admin_arr[0]);
          this._admin.sendEmail(this.admin_arr[0]).subscribe(
            (data: any) => {
              alert("Check Your Registerd email id");
            },
            function(err) {
              console.log(err);
            },
            function() {
              console.log("email send");
            }
          );
        },
        function(err) {
          console.log(err);
        },
        function() {
          console.log("admin done");
        }
      );
  }
}
