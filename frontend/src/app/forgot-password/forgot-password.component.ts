import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { User } from "../models/User";
import { UserServiceService } from "../services/user-service.service";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"]
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  user_arr: User[];
  constructor(private fb: FormBuilder, private _user: UserServiceService) {}

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      user_email: ["", [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.warn(this.forgotPasswordForm.value);

    this._user
      .getUserForPassword(this.forgotPasswordForm.controls.user_email.value)
      .subscribe(
        (data: any) => {
          this.user_arr = data;
          console.log("array:" + this.user_arr);
          this._user.sendEmail(this.user_arr[0]).subscribe(
            (data: any) => {
              console.log(data);
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
          console.log("User done");
        }
      );
  }
}
