import { Component, ElementRef, AfterViewInit } from "@angular/core";
declare const gapi: any;

@Component({
  selector: "app-google-login",
  template:
    '<button class="btn btn-primary" id="googleBtn">Google Sign-In</button>'
})
export class GoogleLoginComponent implements AfterViewInit {
  private clientId: string =
    "409167539692-4eqnaq2jd1itl211gsgh3m2k7i02aefa.apps.googleusercontent.com";

  private scope = [
    "profile",
    "email",
    "https://www.googleapis.com/auth/plus.me",
    "https://www.googleapis.com/auth/contacts.readonly",
    "https://www.googleapis.com/auth/admin.directory.user.readonly"
  ].join(" ");

  public auth2: any;
  public googleInit() {
    let that = this;
    gapi.load("auth2", function() {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: "single_host_origin",
        scope: that.scope
      });
      that.attachSignin(that.element.nativeElement.firstChild);
    });
  }
  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(
      element,
      {},
      function(googleUser) {
        let profile = googleUser.getBasicProfile();
        console.log("Token || " + googleUser.getAuthResponse().id_token);
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("tokenWeb", profile.getEmail());
        window.location.href = "/";
      },
      function(error) {
        console.log(JSON.stringify(error, undefined, 2));
      }
    );
  }

  constructor(private element: ElementRef) {
    console.log("ElementRef: ", this.element);
  }

  ngAfterViewInit() {
    this.googleInit();
  }
}
