import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  flag: string;
  id: string;

  constructor() {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("token");
  }
}
