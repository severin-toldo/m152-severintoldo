import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-cookie-warning',
  templateUrl: './cookie-warning.component.html',
  styleUrls: ['./cookie-warning.component.scss']
})
export class CookieWarningComponent implements OnInit {

  public cookiesForm: FormGroup;
  public isVisible = true;


  constructor(private fb: FormBuilder,
              private cookieService: CookieService) {
  }

  public ngOnInit(): void {
    this.isVisible = !this.cookieService.get('cookie_warning_response');

    this.cookiesForm = this.fb.group({
      required: [{value: true, disabled: true}, [Validators.required]],
      preferences: [''],
      statistics: [''],
      marketing: [''],
    });
  }

  public consentAll(): void {
    this.save({preferences: true, statistics: true, marketing: true});
  }

  public saveSettings(): void {
    this.save(this.cookiesForm.value);
  }

  public save(value: any) {
    console.log(value);
    this.cookieService.set('cookie_warning_response', value);
    this.hideToaster();
  }

  public hideToaster(): void {
    this.isVisible = false;
  }
}
