import { Component, OnInit } from "@angular/core";
import { Admin } from "../models/admin";
import { AdminServiceService } from "../services/admin-service.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  id: string;
  name: string;
  mobile: string;
  password: string;
  admin_arr: Admin[];
  constructor(private _admin: AdminServiceService) {}

  ngOnInit() {
    this.id = localStorage.getItem("token");

    this._admin.getAdmin(this.id).subscribe(
      (data: any) => {
        this.admin_arr = data;
        console.log(this.admin_arr);
        this.name = this.admin_arr[0].admin_name;
        this.mobile = this.admin_arr[0].admin_mobile;
        this.password = this.admin_arr[0].admin_password;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("Admin done");
      }
    );
  }
}
