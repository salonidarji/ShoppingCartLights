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
  addressForm: FormGroup;
  notAllowedFlag = 0;

  constructor(
    private _user: UserServiceService,
    private _address: UserAddressServiceService,
    private fb: FormBuilder,
    private authService: AuthenticationServiceService,
    private _userAddress: UserAddressServiceService
  ) {}
  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this.id = localStorage.getItem("token");
    this.loginPassword = localStorage.getItem("password");

    this.changePasswordForm = this.fb.group({
      user_old_password: ["", Validators.required],
      user_password: ["", Validators.required]
    });

    this.addressForm = this.fb.group({
      fk_user_id: [this.id],
      address_name: ["", Validators.required],
      address_mobile: ["", Validators.required],
      address_line_1: ["", Validators.required],
      address_line_2: [""],
      address_landmark: [""],
      address_pincode: ["", Validators.required],
      address_city: ["", Validators.required],
      is_default: [0]
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
    if (
      this.changePasswordForm.controls["user_old_password"].value ==
      this.password
    ) {
      this._user
        .changePassword(this.id, this.changePasswordForm.value)
        .subscribe(
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
    } else {
      this.notAllowedFlag = 1;
    }
  }

  deleteAddress(pk_address_id) {
    this._address
      .deleteUserAddress(pk_address_id, this.id)
      .subscribe((data: any) => {
        this.ngOnInit();
      });
  }

  tryAgain() {
    window.location.href = "/profile";
  }

  newAddress() {
    console.warn(this.addressForm.value);
    this._userAddress.insertUserAddress(this.addressForm.value).subscribe(
      data => {
        console.log(data);
        window.location.href = "/profile";
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
