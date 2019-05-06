import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"]
})
export class TopbarComponent implements OnInit {
  isLoginID: string;

  constructor() {}

  ngOnInit() {
    this.isLoginID = localStorage.getItem("token");
  }
}
