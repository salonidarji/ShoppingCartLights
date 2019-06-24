import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FaqServiceService } from "../services/faq-service.service";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.css"]
})
export class FaqComponent implements OnInit {
  id: string;
  flag: string;

  faqForm: FormGroup;

  constructor(private fb: FormBuilder, private _faq: FaqServiceService) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");
    this.id = localStorage.getItem("token");

    this.faqForm = this.fb.group({
      faq_question: [""],
      faq_answer: [""],
      fk_user_id: [""]
    });
  }

  onFaq() {
    if (this.id != "") {
      this.faqForm.controls["fk_user_id"].setValue(this.id);
    }

    this._faq.insertFaq(this.faqForm.value).subscribe((data: any) => {
      alert("Your question is submitted. Do check your mail id for answer");
    });
  }
}
