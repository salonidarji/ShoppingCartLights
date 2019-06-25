import { Component, OnInit } from "@angular/core";
import { Faq } from "../models/faq";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FaqServiceService } from "../services/faq-service.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-update-faq",
  templateUrl: "./update-faq.component.html",
  styleUrls: ["./update-faq.component.css"]
})
export class UpdateFaqComponent implements OnInit {
  flag: string;
  faq_arr: Faq[];
  question: string;
  answer: string;
  fk_user_id: string;
  id: string;
  updateFaqForm: FormGroup;

  constructor(
    private _faq: FaqServiceService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.flag = localStorage.getItem("isLoggedIn");

    let id = this.route.snapshot.paramMap.get("uId");
    this.id = id;
    console.log(id);
    this._faq.getFaq(id).subscribe(
      (_data: Faq[]) => {
        this.faq_arr = _data;
        this.updateFaqForm.controls["faq_question"].setValue(
          this.faq_arr[0].faq_question
        );
        this.updateFaqForm.controls["faq_answer"].setValue(
          this.faq_arr[0].faq_answer
        );
        this.updateFaqForm.controls["fk_user_id"].setValue(
          this.faq_arr[0].fk_user_id
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

    this.updateFaqForm = this.fb.group({
      faq_question: [this.question, Validators.required],
      faq_answer: [this.answer, [Validators.required]],
      fk_user_id: [this.fk_user_id]
    });
  }

  onSubmit() {
    this._faq.updateFaq(this.id, this.updateFaqForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(["/viewFaq"]);
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
