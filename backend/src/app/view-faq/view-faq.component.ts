import { Component, OnInit } from "@angular/core";
import { Faq } from "../models/faq";
import { FaqServiceService } from "../services/faq-service.service";

@Component({
  selector: "app-view-faq",
  templateUrl: "./view-faq.component.html",
  styleUrls: ["./view-faq.component.css"]
})
export class ViewFaqComponent implements OnInit {
  faq_arr: Faq[];
  flag: string;

  constructor(private _faq: FaqServiceService) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this._faq.getAllFaq().subscribe((data: any) => {
      this.faq_arr = data;
    });
  }

  deleteFaq(id) {
    this._faq.deleteFaq(id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }
}
