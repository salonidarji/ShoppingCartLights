import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceService } from "../services/user-service.service";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthenticationServiceService } from "../services/authentication-service.service";
import { ILogin } from "../login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  model: ILogin = { user_email: "saloni@gmail.com", user_password: "saloni" };
  insertLoginForm: FormGroup;
  user_arr: User[];
  returnUrl: string;
  message: string;

  constructor(
    private _user: UserServiceService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationServiceService
  ) {}

  ngOnInit() {
    this.insertLoginForm = this.fb.group({
      user_email: ["", [Validators.required, Validators.email]],
      user_password: ["", Validators.required]
    });

    this.returnUrl = "/dashboard";
    this.authService.logout();
  }

  onSubmit() {
    console.warn(this.insertLoginForm.value);
    //  this._user.getUser(this.insertLoginForm.value).subscribe(
    //    data => {
    //      console.log(data);
    //      alert("model data done");
    //         this.model.values(data;

    //    },
    //    function(err) {
    //      console.log(err);
    //    },
    //    function() {
    //      console.log("finally");
    //    }
    //  );

    if (
      this.insertLoginForm.controls.user_email.value == this.model.user_email &&
      this.insertLoginForm.controls.user_password.value ==
        this.model.user_password
    ) {
      console.log("Login successful");
      //this.authService.authLogin(this.model);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "token",
        this.insertLoginForm.controls.user_email.value
      );
      this.router.navigate([this.returnUrl]);
    } else {
      this.message = " Email Address or Password is Wrong..!!!";
    }
  }
}
