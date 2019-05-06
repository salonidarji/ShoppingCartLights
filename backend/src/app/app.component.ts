import { Component } from "@angular/core";
import { AuthenticationServiceService } from "./services/authentication-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Admin";
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
