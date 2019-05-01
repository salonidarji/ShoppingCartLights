import { Component, OnInit } from "@angular/core";
import { UserAddress } from "../../models/user-address";
import { UserAddressServiceService } from "../../services/user-address-service.service";

@Component({
  selector: "app-view-user-address",
  templateUrl: "./view-user-address.component.html",
  styleUrls: ["./view-user-address.component.css"]
})
export class ViewUserAddressComponent implements OnInit {
  userAddress_arr: UserAddress[];
  constructor(private _userAddress: UserAddressServiceService) {}

  ngOnInit() {
    this._userAddress.getAllUserAddress().subscribe(
      (_data: any) => {
        this.userAddress_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All user Addresss done");
      }
    );
  }

  deleteUserAddress(id) {
    this._userAddress.deleteUserAddress(id).subscribe(
      (_data: any) => {
        this.userAddress_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("user Addresss deleted");
      }
    );
  }

  singleUserAddress(id) {
    this._userAddress.getUserAddress(id).subscribe(
      (_data: any) => {
        this.userAddress_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single user Address done");
      }
    );
  }
}
