import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from "../../app-routing.module";
import {Route} from "@angular/router";
import {isBlankOrEmpty} from "../../shared/other.util";

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  public routes: Route[] = AppRoutingModule.getRoutes().filter(route => this.displayRoute(route));


  constructor() {
  }

  public ngOnInit(): void {
  }

  public displayRoute(route: Route): boolean {
    return route && !isBlankOrEmpty(route.path) && isBlankOrEmpty(route.redirectTo);
  }

  public getRouterLink(route: Route): string {
    return '/' + route.path;
  }

  public getChildRouterLink(parent: Route, child: Route): string {
    return '/' + parent.path + '/' + child.path;
  }

}
