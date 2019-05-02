import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Feature } from "../../models/feature";
import { FeatureServiceService } from "../../services/feature-service.service";

@Component({
  selector: "app-insert-feature",
  templateUrl: "./insert-feature.component.html",
  styleUrls: ["./insert-feature.component.css"]
})
export class InsertFeatureComponent implements OnInit {
  insertFeatureForm: FormGroup;
  feature_arr: Feature[];
  constructor(
    private _feature: FeatureServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.insertFeatureForm = this.fb.group({
      feature_name: ["", Validators.required]
    });
  }

  onSubmit() {
    console.warn(this.insertFeatureForm.value);
    this._feature.insertFeature(this.insertFeatureForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/viewFeature"]);
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
