import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;


  constructor(private fb: FormBuilder,
              private toastr: ToastrService) {
  }

  public ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      address: [''],
      zip: [''],
      place: [''],
      phoneNumber: [''],
      message: ['', Validators.required],
    });
  }

  public submit(): void {
    console.log('form value: ', this.form.value);
    this.toastr.success('Senden erfolgreich.', 'Erfolgreich!');
    this.form.reset();
  }

}
