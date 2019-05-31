import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { UserServiceService } from "../services/user-service.service";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AuthenticationServiceService } from "../services/authentication-service.service";

@Component({
  selector: "app-login-signup",
  templateUrl: "./login-signup.component.html",
  styleUrls: ["./login-signup.component.css"]
})
export class LoginSignupComponent implements OnInit {
  model: User[];
  loginForm: FormGroup;
  user_arr: User[];
  returnUrl: string;
  message: string;
  insertUserForm: FormGroup;
  user_arr_signup: User[];

  constructor(
    private _user: UserServiceService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthenticationServiceService
  ) {}

  ngOnInit() {
    this._user.getAllUser().subscribe((data: any) => {
      this.model = data;
      console.log(this.model);
    });

    this.loginForm = this.fb.group({
      user_email: ["", [Validators.required, Validators.email]],
      user_password: ["", Validators.required]
    });

    this.returnUrl = "/content";
    this.authService.logout();

    this.insertUserForm = this.fb.group({
      user_name: ["", Validators.required],
      user_mobile: ["", Validators.required],
      user_email: ["", [Validators.required, Validators.email]],
      user_password: ["", Validators.required],
      user_confirm_password: ["", Validators.required]
    });
  }

  onLogin() {
    console.warn(this.loginForm.value);
    console.warn(this.model);

    for (let i = 0; i < this.model.length; i++) {
      if (
        this.loginForm.controls.user_email.value == this.model[i].user_email &&
        this.loginForm.controls.user_password.value ==
          this.model[i].user_password
      ) {
        alert("Login successful");
        //this.authService.authLogin(this.model);

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", this.loginForm.controls.user_email.value);
        localStorage.setItem(
          "password",
          this.loginForm.controls.user_password.value
        );

        this.router.navigate([this.returnUrl]);
      }
    }
    if (localStorage.getItem("isLoggedIn") == "false") {
      this.message = " Email Address or Password is Wrong..!!!";
    }
  }

  onSignup() {
    console.warn(this.insertUserForm.value);
    this._user.insertUser(this.insertUserForm.value).subscribe(
      data => {
        console.log(data);
        alert("You are registered Successfully.");
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
