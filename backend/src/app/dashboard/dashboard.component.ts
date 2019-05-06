import { Component, OnInit } from "@angular/core";
import { AuthenticationServiceService } from "../services/authentication-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  id: string;
  constructor(
    public _authService: AuthenticationServiceService,
    private router: Router
  ) {}
  ngOnInit() {
    this.id = localStorage.getItem("token");
  }

  logout(): void {
    console.log("Logout");
    this._authService.logout();
    alert("You have log out..!!!");
    this.id = "";
    this.router.navigate(["/login"]);
  }
}
