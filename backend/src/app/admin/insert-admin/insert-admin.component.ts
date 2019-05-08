import { Component, OnInit } from "@angular/core";
import { AdminServiceService } from "src/app/services/admin-service.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Admin } from "src/app/models/admin";
import { Router } from "@angular/router";

@Component({
  selector: "app-insert-admin",
  templateUrl: "./insert-admin.component.html",
  styleUrls: ["./insert-admin.component.css"]
})
export class InsertAdminComponent implements OnInit {
  flag: string;
  insertAdminForm: FormGroup;
  admin_arr: Admin[];
  constructor(
    private _admin: AdminServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    this.insertAdminForm = this.fb.group({
      admin_name: ["", Validators.required],
      admin_password: ["", Validators.required],
      admin_email: ["", [Validators.required, Validators.email]],
      admin_mobile: ["", Validators.required]
    });
  }

  onSubmit() {
    console.warn(this.insertAdminForm.value);
    this._admin.insertAdmin(this.insertAdminForm.value).subscribe(
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
