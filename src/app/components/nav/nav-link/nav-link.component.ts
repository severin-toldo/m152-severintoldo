import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavLink} from "../../../model/nav-link.model";
import {getCurrentRoute} from "../../../shared/other.util";
import {Router} from "@angular/router";
import {SelectOption} from "../../../model/select-option.model";

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit {

  @Input() public navLink: NavLink;

  @Output() public onRoute = new EventEmitter<void>();

  public hasSubs = false;


  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.hasSubs = this.hasNavLinkSubs(this.navLink);
  }

  public onNavLinkClicked(navLink: NavLink): void {
    this.onRoute.emit();
    this.router.navigate(navLink.route);
  }

  public navLinksToSelectOptions(navLinks: NavLink[]): SelectOption[] {
    return navLinks.map(n => new SelectOption(n.text, n));
  }

  public isNavLinkActive(navLink: NavLink): boolean {
    if (this.hasNavLinkSubs(navLink)) {
      return this.isNavLinkSubActive(navLink)
    }

    return this.isNavLinkRouteCurrentRoute(navLink);
  }

  private isNavLinkSubActive(navLink: NavLink): boolean {
    const foundNavLink = navLink.subs.filter(n => this.isNavLinkRouteCurrentRoute(n));
    return foundNavLink && foundNavLink.length > 0;
  }

  private hasNavLinkSubs(navLink: NavLink): boolean {
    return navLink.subs && navLink.subs.length !== 0;
  }

  private isNavLinkRouteCurrentRoute(navLink: NavLink): boolean {
    return navLink.route && navLink.route[0] === getCurrentRoute();
  }
}
