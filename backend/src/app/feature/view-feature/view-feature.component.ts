import { Component, OnInit } from "@angular/core";
import { FeatureServiceService } from "../../services/feature-service.service";
import { Feature } from "../../models/feature";

@Component({
  selector: "app-view-feature",
  templateUrl: "./view-feature.component.html",
  styleUrls: ["./view-feature.component.css"]
})
export class ViewFeatureComponent implements OnInit {
  feature_arr: Feature[];
  constructor(private _feature: FeatureServiceService) {}

  ngOnInit() {
    this._feature.getAllFeature().subscribe(
      (_data: any) => {
        this.feature_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("All features done");
      }
    );
  }

  deleteFeature(id) {
    this._feature.deleteFeature(id).subscribe(
      (_data: any) => {
        this.feature_arr = _data;
        this.ngOnInit();
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("features deleted");
      }
    );
  }

  singleFeature(id) {
    this._feature.getFeature(id).subscribe(
      (_data: any) => {
        this.feature_arr = _data;
      },
      function(err) {
        console.log(err);
      },
      function() {
        console.log("single feature done");
      }
    );
  }
}
