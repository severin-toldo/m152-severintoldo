import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cookie-warning',
  templateUrl: './cookie-warning.component.html',
  styleUrls: ['./cookie-warning.component.scss']
})
export class CookieWarningComponent implements OnInit {

  public cookiesForm: FormGroup;
  public isVisible = true;


  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.cookiesForm = this.fb.group({
      required: [{value: true, disabled: true}, [Validators.required]],
      preferences: [''],
      statistics: [''],
      marketing: [''],
    });
  }

  // TODO proccess response
  public consentAll(): void {
    console.log(this.cookiesForm.value);
    this.hideToaster();
  }

  // TODO proccess response
  public saveSettings(): void {
    console.log(this.cookiesForm.value);
    this.hideToaster();
  }

  public hideToaster(): void {
    this.isVisible = false;
  }
}
