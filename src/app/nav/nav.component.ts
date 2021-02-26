import { Component, OnInit } from '@angular/core';
import {NavLink} from "../model/nav-link.model";
import {NavService} from "../service/nav.service";
import {homeRoute} from "../shared/routes";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navLinks: NavLink[] = [];

  public readonly homeRoute = homeRoute();


  constructor(private navService: NavService) {
  }

  public ngOnInit(): void {
    this.navLinks = this.navService.getTopNav();
  }

  public isNavLinkActive(navLink: NavLink): boolean {
    return navLink.route[0] === getCurrentRoute();
  }
}

export function getCurrentRoute(): string {
  return window.location.href.replace(window.location.origin, '');
}
