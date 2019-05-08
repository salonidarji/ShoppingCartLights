import { Component, OnInit } from "@angular/core";
import { Admin } from "../../models/admin";
import { AdminServiceService } from "../../services/admin-service.service";

@Component({
  selector: "app-view-admin",
  templateUrl: "./view-admin.component.html",
  styleUrls: ["./view-admin.component.css"]
})
export class ViewAdminComponent implements OnInit {
  admin_arr: Admin[];
  flag: string;
  constructor(private _admin: AdminServiceService) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this._admin.getAllAdmin().subscribe(
      (_data: any) => {
        this.admin_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All admins done");
      }
    );
  }

  deleteAdmin(id) {
    this._admin.deleteAdmin(id).subscribe(
      (_data: any) => {
        this.admin_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("admins deleted");
      }
    );
  }

  singleAdmin(id) {
    this._admin.getAdmin(id).subscribe(
      (_data: any) => {
        this.admin_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single admin done");
      }
    );
  }
}
