import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserAddress } from "src/app/models/user-address";
import { User } from "src/app/models/user";
import { UserAddressServiceService } from "src/app/services/user-address-service.service";
import { UserServiceService } from "src/app/services/user-service.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-user-address",
  templateUrl: "./update-user-address.component.html",
  styleUrls: ["./update-user-address.component.css"]
})
export class UpdateUserAddressComponent implements OnInit {
  updateUserAddressForm: FormGroup;
  userAddress_arr: UserAddress[];
  user_arr: User[];
  id: string;
  city: string;
  pincode: string;
  landmark: string;
  line1: string;
  line2: string;
  mobile: string;
  name: string;
  constructor(
    private _userAddress: UserAddressServiceService,
    private _user: UserServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._userAddress.getUserAddress(id).subscribe(
      (_data: UserAddress[]) => {
        this.userAddress_arr = _data;

        this.updateUserAddressForm.controls["address_name"].setValue(
          this.userAddress_arr[0].address_name
        );
        this.updateUserAddressForm.controls["address_mobile"].setValue(
          this.userAddress_arr[0].address_mobile
        );
        this.updateUserAddressForm.controls["address_line_1"].setValue(
          this.userAddress_arr[0].address_line_1
        );
        this.updateUserAddressForm.controls["address_line_2"].setValue(
          this.userAddress_arr[0].address_line_2
        );
        this.updateUserAddressForm.controls["address_landmark"].setValue(
          this.userAddress_arr[0].address_landmark
        );
        this.updateUserAddressForm.controls["address_pincode"].setValue(
          this.userAddress_arr[0].address_pincode
        );
        this.updateUserAddressForm.controls["address_city"].setValue(
          this.userAddress_arr[0].address_city
        );
        this.updateUserAddressForm.controls["fk_user_id"].setValue(
          this.userAddress_arr[0].fk_user_id
        );
        this.updateUserAddressForm.controls["is_default"].setValue(
          this.userAddress_arr[0].is_default
        );
        console.log(_data);
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log();
      }
    );

    this.updateUserAddressForm = this.fb.group({
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
    console.warn(this.updateUserAddressForm.value);
    this._userAddress
      .updateUserAddress(this.id, this.updateUserAddressForm.value)
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
