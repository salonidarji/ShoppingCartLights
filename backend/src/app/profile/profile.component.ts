import { Component, OnInit } from "@angular/core";
import { Admin } from "../models/admin";
import { AdminServiceService } from "../services/admin-service.service";
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
  name: string;
  mobile: string;
  password: string;
  admin_arr: Admin[];
  passwordChange: string;
  changePasswordForm: FormGroup;

  constructor(
    private _admin: AdminServiceService,
    private fb: FormBuilder,
    private authService: AuthenticationServiceService
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this.id = localStorage.getItem("token");

    this.changePasswordForm = this.fb.group({
      admin_password: ["", Validators.required]
    });

    this._admin.getAdmin(this.id).subscribe(
      (data: any) => {
        this.admin_arr = data;
        console.log(this.admin_arr);
        this.name = this.admin_arr[0].admin_name;
        this.mobile = this.admin_arr[0].admin_mobile;
        this.password = this.admin_arr[0].admin_password;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("Admin done");
      }
    );
  }

  onPasswordChange() {
    console.log(this.changePasswordForm.value);
    this._admin
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
  }
}
