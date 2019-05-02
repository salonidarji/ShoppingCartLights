import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { Feature } from "../../models/feature";
import { FeatureServiceService } from "../../services/feature-service.service";

@Component({
  selector: "app-update-feature",
  templateUrl: "./update-feature.component.html",
  styleUrls: ["./update-feature.component.css"]
})
export class UpdateFeatureComponent implements OnInit {
  updateFeatureForm: FormGroup;
  feature_arr: Feature[];
  id: string;
  constructor(
    private _feature: FeatureServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._feature.getFeature(id).subscribe(
      (_data: Feature[]) => {
        this.feature_arr = _data;
        this.updateFeatureForm.controls["feature_name"].setValue(
          this.feature_arr[0].feature_name
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

    this.updateFeatureForm = this.fb.group({
      feature_name: ["", Validators.required]
    });
  }

  onSubmit() {
    console.warn(this.updateFeatureForm.value);
    this._feature
      .updateFeature(this.id, this.updateFeatureForm.value)
      .subscribe(
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
