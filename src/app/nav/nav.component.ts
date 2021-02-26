import { Component, OnInit } from '@angular/core';
import {NavLink} from "../model/nav-link.model";
import {NavService} from "../service/nav.service";
import {homeRoute} from "../shared/routes";
import {Router} from "@angular/router";
import {getCurrentRoute} from "../shared/other.util";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  public navLinks: NavLink[] = [];
  public isMenuCollapsed = true;

  public readonly homeRoute = homeRoute();


  constructor(private navService: NavService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.navLinks = this.navService.getTopNav();
  }

  public toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  public onNavLinkClicked(navLink: NavLink): void {
    this.router.navigate(navLink.route);
    this.isMenuCollapsed = true;
  }

  public isNavLinkActive(navLink: NavLink): boolean {
    return navLink.route[0] === getCurrentRoute();
  }
}
