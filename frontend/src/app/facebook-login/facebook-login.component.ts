import { Component, OnInit } from "@angular/core";
declare var FB: any;

@Component({
  selector: "app-facebook-login",
  template:
    '<button type="button" class="btn btn-primary" (click)="submitLogin();"><i class="fa fa-facebook"></i> Log in</button>'
})
export class FacebookLoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId: "2309368525822810",
        cookie: true,
        xfbml: true,
        version: "v3.3"
      });

      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  submitLogin() {
    console.log("submit login to facebook");
    // FB.login();
    FB.login(response => {
      console.log("submitLogin", response);
      if (response.authResponse) {
        console.log(response.authResponse);
        FB.api("/me", function(response) {
          console.log(JSON.stringify(response));
        });
        /*localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("tokenWeb", profile.getEmail());
            window.location.href = "/";
            */
        //login success
        //login success code here
        //redirect to home page
      } else {
        console.log("User login failed");
      }
    });
  }
}
