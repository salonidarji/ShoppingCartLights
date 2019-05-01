import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { UserServiceService } from "../../services/user-service.service";

@Component({
  selector: "app-view-user",
  templateUrl: "./view-user.component.html",
  styleUrls: ["./view-user.component.css"]
})
export class ViewUserComponent implements OnInit {
  user_arr: User[];
  constructor(private _user: UserServiceService) {}

  ngOnInit() {
    this._user.getAllUser().subscribe(
      (_data: any) => {
        this.user_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All users done");
      }
    );
  }

  deleteUser(id) {
    this._user.deleteUser(id).subscribe(
      (_data: any) => {
        this.user_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("users deleted");
      }
    );
  }

  singleUser(id) {
    this._user.getUser(id).subscribe(
      (_data: any) => {
        this.user_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single user done");
      }
    );
  }
}
