import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserAddress } from "src/app/models/user-address";
import { User } from "src/app/models/user";
import { UserAddressServiceService } from "src/app/services/user-address-service.service";
import { UserServiceService } from "src/app/services/user-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-insert-user-address",
  templateUrl: "./insert-user-address.component.html",
  styleUrls: ["./insert-user-address.component.css"]
})
export class InsertUserAddressComponent implements OnInit {
  insertUserAddressForm: FormGroup;
  userAddress_arr: UserAddress[];
  user_arr: User[];
  constructor(
    private _userAddress: UserAddressServiceService,
    private _user: UserServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.insertUserAddressForm = this.fb.group({
      address_name: ["", Validators.required],
      address_mobile: ["", Validators.required],
      address_line_1: ["", Validators.required],
      address_line_2: [""],
      address_landmark: [""],
      address_pincode: ["", Validators.required],
      address_city: ["", Validators.required],
      fk_user_id: ["", Validators.required],
      is_default: ["", Validators.required]
    });

    this._user.getAllUser().subscribe(
      (data: any) => {
        this.user_arr = data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("finally of user");
      }
    );
  }

  onSubmit() {
    console.warn(this.insertUserAddressForm.value);
    this._userAddress
      .insertUserAddress(this.insertUserAddressForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(["/viewUserAddress"]);
        },
        function(err) {
          console.log(err);
        },
        function() {
          console.log("finally");
        }
      );
  }
}
