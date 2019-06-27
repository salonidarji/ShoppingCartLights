import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserAddress } from "../models/user-address";
import { UserAddressServiceService } from "../services/user-address-service.service";

@Component({
  selector: "app-update-address",
  templateUrl: "./update-address.component.html",
  styleUrls: ["./update-address.component.css"]
})
export class UpdateAddressComponent implements OnInit {
  id: string;
  flag: string;
  address_id;
  updateAddressForm: FormGroup;
  newDate: string;

  address_arr: UserAddress[];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private _address: UserAddressServiceService
  ) {}

  ngOnInit() {
    let address_id = <any>this.route.snapshot.paramMap.get("uId");
    this.address_id = address_id;
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("tokenWeb");
    var date = new Date();
    this.newDate = date.toLocaleDateString("en-US");

    this.updateAddressForm = this.fb.group({
      fk_user_id: [this.id],
      order_date: [this.newDate],
      address_name: ["", Validators.required],
      address_mobile: ["", Validators.required],
      address_line_1: ["", Validators.required],
      address_line_2: [""],
      address_landmark: [""],
      address_pincode: ["", Validators.required],
      address_city: ["", Validators.required]
    });

    this._address.getUserAddress(this.id).subscribe(
      (data: any) => {
        this.address_arr = data;
        console.log(this.address_arr);

        for (var i = 0; i < this.address_arr.length; i++) {
          if (this.address_arr[i].pk_address_id == address_id) {
            this.updateAddressForm = this.fb.group({
              fk_user_id: [this.id],
              order_date: [this.newDate],
              address_name: [
                this.address_arr[i].address_name,
                Validators.required
              ],
              address_mobile: [
                this.address_arr[i].address_mobile,
                Validators.required
              ],
              address_line_1: [
                this.address_arr[i].address_line_1,
                Validators.required
              ],
              address_line_2: [this.address_arr[i].address_line_2],
              address_landmark: [this.address_arr[i].address_landmark],
              address_pincode: [
                this.address_arr[i].address_pincode,
                Validators.required
              ],
              address_city: [
                this.address_arr[i].address_city,
                Validators.required
              ]
            });
          }
        }
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("address done");
      }
    );
  }

  onUpdate(item) {
    this._address
      .updateUserAddress(this.address_id, item)
      .subscribe((data: any) => {
        alert("address updated successfully");
        this.router.navigate(["/profile"]);
      });
  }
}
