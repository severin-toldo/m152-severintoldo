import { Component, OnInit } from '@angular/core';
import {contactRoute, imprintRoute} from "../../../shared/routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  constructor(private router: Router) {
  }

  public ngOnInit(): void {
  }

  public onContactLinkClick() {
    window.scrollTo(0, 0);
    this.router.navigate(contactRoute());
  }

  public onImprintLinkClick() {
    window.scrollTo(0, 0);
    this.router.navigate(imprintRoute());
  }

}
