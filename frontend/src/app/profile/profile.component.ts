import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { UserServiceService } from "../services/user-service.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationServiceService } from "../services/authentication-service.service";
import { UserAddressServiceService } from "../services/user-address-service.service";
import { UserAddress } from "../models/user-address";

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
  address_arr: UserAddress[];
  passwordChange: string;
  changePasswordForm: FormGroup;
  getUserForm: FormGroup;

  constructor(
    private _user: UserServiceService,
    private _address: UserAddressServiceService,
    private fb: FormBuilder,
    private authService: AuthenticationServiceService
  ) {}
  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this.id = localStorage.getItem("token");
    this.loginPassword = localStorage.getItem("password");

    this.changePasswordForm = this.fb.group({
      user_password: ["", Validators.required]
    });

    this._user.getUser(this.id).subscribe(
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

    this._address.getUserAddress(this.id).subscribe(
      (data: any) => {
        this.address_arr = data;
        console.log(this.address_arr);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("address done");
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

  deleteAddress(pk_address_id) {
    this._address
      .deleteUserAddress(pk_address_id, this.id)
      .subscribe((data: any) => {
        alert("Address Deleted");
        this.ngOnInit();
      });
  }
}
