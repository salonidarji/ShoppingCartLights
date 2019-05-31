import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { UserServiceService } from "../services/user-service.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationServiceService } from "../services/authentication-service.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  flag: string;
  id: string;
  loginPassword: string;
  name: string;
  mobile: string;
  password: string;
  user_arr: User[];
  passwordChange: string;
  changePasswordForm: FormGroup;
  getUserForm: FormGroup;

  constructor(
    private _user: UserServiceService,
    private fb: FormBuilder,
    private authService: AuthenticationServiceService
  ) {}
  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this.id = localStorage.getItem("token");
    this.loginPassword = localStorage.getItem("password");
    this.getUserForm = this.fb.group({
      user_email: [this.loginPassword],
      user_password: [this.loginPassword]
    });
    this.changePasswordForm = this.fb.group({
      user_password: ["", Validators.required]
    });

    this._user.getUser(this.getUserForm.value).subscribe(
      (data: any) => {
        this.user_arr = data;
        console.log(this.user_arr);
        this.name = this.user_arr[0].user_name;
        this.mobile = this.user_arr[0].user_mobile;
        this.password = this.user_arr[0].user_password;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("User done");
      }
    );
  }

  onPasswordChange() {
    console.log(this.changePasswordForm.value);
    console.log("id:" + this.id);
    this._user.changePassword(this.id, this.changePasswordForm.value).subscribe(
      data => {
        console.log(data);
        this.authService.logout();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally password");
      }
    );
  }
}
