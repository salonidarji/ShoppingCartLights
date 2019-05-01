import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl
} from "@angular/forms";
import { UserServiceService } from "../../services/user-service.service";
import { User } from "../../models/user";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  user_arr: User[];
  name: string;
  mobile: string;
  email: string;
  password: string;
  id: string;

  updateUserForm: FormGroup;
  constructor(
    private _user: UserServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._user.getUser(id).subscribe(
      (_data: User[]) => {
        this.user_arr = _data;
        this.updateUserForm.controls["user_name"].setValue(
          this.user_arr[0].user_name
        );
        this.updateUserForm.controls["user_mobile"].setValue(
          this.user_arr[0].user_mobile
        );
        this.updateUserForm.controls["user_email"].setValue(
          this.user_arr[0].user_email
        );
        this.updateUserForm.controls["user_password"].setValue(
          this.user_arr[0].user_password
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

    this.updateUserForm = this.fb.group({
      user_name: [this.name, Validators.required],
      user_email: [this.email, [Validators.required, Validators.email]],
      user_mobile: [this.mobile, Validators.required],
      user_password: [this.password, Validators.required]
    });
  }

  onSubmit() {
    this._user.updateUser(this.id, this.updateUserForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/viewUser"]);
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
