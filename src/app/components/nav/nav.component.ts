import {
  AfterContentChecked, AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';
import {NavLink} from "../../model/nav-link.model";
import {NavService} from "../../service/nav.service";
import {homeRoute} from "../../shared/routes";
import {Router} from "@angular/router";
import {getCssProperties, getCssProperty, getCurrentRoute} from "../../shared/other.util";
import {Subject} from "rxjs";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, AfterViewChecked {

  public navLinks: NavLink[] = [];
  public isMenuCollapsed = true;
  public isNavbarCollapsed = false;
  public selectedNavLink: NavLink;
  public isNavLinkSubsContainerVisible = false;

  public readonly homeRoute = homeRoute();

  @ViewChild('navbarToggler') navbarToggler: ElementRef;


  constructor(private navService: NavService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.isNavbarCollapsed = this.isNavBarCollapsed();
  }

  public ngOnInit(): void {
    this.navLinks = this.navService.getTopNav();
  }

  public toggleMenu(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  public openNavLinkSubsContainer(navLink: NavLink): void {
    this.selectedNavLink = navLink;
    this.isNavLinkSubsContainerVisible = true;
  }

  public routeToNavLinkRoute(navLink: NavLink): void {
    this.selectedNavLink = navLink;
    this.isNavLinkSubsContainerVisible = false;
    this.isMenuCollapsed = true;
    this.router.navigate(navLink.route);
  }

  // public onNavLinkClicked(navLink: NavLink): void {
  //   this.isMenuCollapsed = true;
  //   this.router.navigate(navLink.route);
  // }

  public isNavLinkActive(navLink: NavLink): boolean {
    return navLink.route && navLink.route[0] === getCurrentRoute();
  }

  private isNavBarCollapsed(): boolean {
    return getCssProperty(this.navbarToggler.nativeElement, 'display') !== 'none';
  }

  public ngAfterViewChecked(): void {
    this.isNavbarCollapsed = this.isNavBarCollapsed();
    this.changeDetectorRef.detectChanges();
  }
}
