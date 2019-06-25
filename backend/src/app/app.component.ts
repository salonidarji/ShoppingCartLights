import { Component } from "@angular/core";
import { AuthenticationServiceService } from "./services/authentication-service.service";
import { Router } from "@angular/router";
import { OrderDetailServiceService } from "./services/order-detail-service.service";
import { OrderDetail } from "./models/order-detail";
import { Faq } from "./models/faq";
import { FaqServiceService } from "./services/faq-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Admin";
  id: string;
  flag: string;

  orederDetail_arr: OrderDetail[] = [];
  faq_arr: Faq[] = [];
  notificationCounter = 0;
  orderLength = 0;
  faqLength = 0;

  constructor(
    public _authService: AuthenticationServiceService,
    private router: Router,
    private _orderDetail: OrderDetailServiceService,
    private _faq: FaqServiceService
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("token");

    this._orderDetail.getAllOrderDetail().subscribe((data: any) => {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i].order_status == "In Process") {
          this.orederDetail_arr.push(data[i]);
        }
      }
      this.notificationCounter += this.orederDetail_arr.length;
      this.orderLength = this.orederDetail_arr.length;
    });

    this._faq.getAllFaq().subscribe((data: any) => {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i].faq_answer == "") {
          this.faq_arr.push(data[i]);
        }
      }
      this.notificationCounter += this.faq_arr.length;
      this.faqLength = this.faq_arr.length;
    });
  }

  logout(): void {
    console.log("Logout");
    this._authService.logout();
    this.id = "";
    window.location.href = "/";
  }
}
