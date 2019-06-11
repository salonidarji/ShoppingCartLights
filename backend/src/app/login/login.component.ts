import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceService } from "../services/user-service.service";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthenticationServiceService } from "../services/authentication-service.service";
import { ILogin } from "../login";
import { AdminServiceService } from "../services/admin-service.service";
import { Admin } from "../models/admin";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  model: Admin[];
  insertLoginForm: FormGroup;
  user_arr: User[];
  returnUrl: string;
  message: string;

  constructor(
    private _admin: AdminServiceService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationServiceService
  ) {}

  ngOnInit() {
    this._admin.getAllAdmin().subscribe((data: any) => {
      this.model = data;
      console.log(this.model);
    });

    this.insertLoginForm = this.fb.group({
      admin_email: ["", [Validators.required, Validators.email]],
      admin_password: ["", Validators.required]
    });

    this.returnUrl = "/dashboard";
    this.authService.logout();
  }

  onSubmit() {
    console.warn(this.insertLoginForm.value);

    for (let i = 0; i <= this.model.length; i++) {
      if (
        this.insertLoginForm.controls.admin_email.value ==
          this.model[0].admin_email &&
        this.insertLoginForm.controls.admin_password.value ==
          this.model[0].admin_password
      ) {
        console.log("Login successful");
        //this.authService.authLogin(this.model);

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem(
          "token",
          this.insertLoginForm.controls.admin_email.value
        );

        window.location.href = "/";
      }
    }
    if (localStorage.getItem("isLoggedIn") == "false") {
      this.message = " Email Address or Password is Wrong..!!!";
    }
  }
}
