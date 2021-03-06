import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Admin } from "src/app/models/admin";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminServiceService } from "src/app/services/admin-service.service";

@Component({
  selector: "app-update-admin",
  templateUrl: "./update-admin.component.html",
  styleUrls: ["./update-admin.component.css"]
})
export class UpdateAdminComponent implements OnInit {
  flag: string;
  admin_arr: Admin[];
  name: string;
  mobile: string;
  email: string;
  id: string;

  updateAdminForm: FormGroup;
  constructor(
    private _admin: AdminServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._admin.getAdmin(id).subscribe(
      (_data: Admin[]) => {
        this.admin_arr = _data;
        this.updateAdminForm.controls["admin_name"].setValue(
          this.admin_arr[0].admin_name
        );
        this.updateAdminForm.controls["admin_mobile"].setValue(
          this.admin_arr[0].admin_mobile
        );
        this.updateAdminForm.controls["admin_email"].setValue(
          this.admin_arr[0].admin_email
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

    this.updateAdminForm = this.fb.group({
      admin_name: [this.name, Validators.required],
      admin_email: [this.email, [Validators.required, Validators.email]],
      admin_mobile: [this.mobile, Validators.required]
    });
  }

  onSubmit() {
    this._admin.updateAdmin(this.id, this.updateAdminForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/viewAdmin"]);
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
