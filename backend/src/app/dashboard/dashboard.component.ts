import { Component, OnInit } from "@angular/core";
import { AuthenticationServiceService } from "../services/authentication-service.service";
import { Router } from "@angular/router";
import { User } from "../models/user";
import { UserServiceService } from "../services/user-service.service";
import { ProductServiceService } from "../services/product-service.service";
import { OrderServiceService } from "../services/order-service.service";
import { Product } from "../models/product";
import { Order } from "../models/order";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  flag: string;
  id: string;
  user_arr: User[];
  public userN: number;
  product_arr: Product[];
  productN: number;
  order_arr: Order[];
  public orderN: number;
  percentage: number;
  constructor(
    public _authService: AuthenticationServiceService,
    private router: Router,
    private _user: UserServiceService,
    private _product: ProductServiceService,
    private _order: OrderServiceService
  ) {}
  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this.id = localStorage.getItem("token");

    this._user.getAllUser().subscribe((data: any) => {
      this.user_arr = data;
      this.userN = this.user_arr.length;
    });

    this._product.getAllProduct().subscribe((data: any) => {
      this.product_arr = data;
      this.productN = this.product_arr.length;
    });

    this._order.getAllOrder().subscribe(
      (_data: any) => {
        this.order_arr = _data;
        this.orderN = this.order_arr.length;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All orders done");
      }
    );
  }

  logout(): void {
    console.log("Logout");
    this._authService.logout();
    alert("You have log out..!!!");
    this.id = "";
    this.router.navigate(["/login"]);
  }
}
