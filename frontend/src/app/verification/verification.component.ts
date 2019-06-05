import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserServiceService } from "../services/user-service.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-verification",
  templateUrl: "./verification.component.html",
  styleUrls: ["./verification.component.css"]
})
export class VerificationComponent implements OnInit {
  verificationForm: FormGroup;
  id: string;
  verify_flag = 0;

  constructor(
    private fb: FormBuilder,
    private _user: UserServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("uId");

    this.verificationForm = this.fb.group({
      verification_code: ["", [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.verificationForm.value);
    this._user.verify(this.id, this.verificationForm.value).subscribe(
      (data: any) => {
        console.log(data);
        this.verify_flag = 1;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("verified");
      }
    );
  }
}
