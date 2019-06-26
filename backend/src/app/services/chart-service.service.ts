import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ChartServiceService {
  chart_url = "http://localhost:3000/chart/";

  constructor(private _http: HttpClient) {}

  getChartData() {
    return this._http.get(this.chart_url);
  }
}
