import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationServiceService } from "../services/authentication-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  flag: string;
  id: string;

  constructor(
    public _authService: AuthenticationServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("token");
  }

  logout(): void {
    console.log("Logout");
    this._authService.logout();
    alert("You have log out..!!!");

    this.router.navigate(["/content"]);
  }
}
