import {Injectable, OnInit} from '@angular/core';
import {Route, Routes} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {isBlankOrEmpty} from "../shared/other.util";
import {TranslateService} from "@ngx-translate/core";
import {RouteNamePairModel} from "../model/route-name-pair.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  private routes: Route[] = AppRoutingModule.getRoutes().filter(route => this.displayRoute(route));

  private routeByNames$: Observable<RouteNamePairModel[]>;


  constructor(private translate: TranslateService) {
    this.routeByNames$ = this.translate.get('init_request')
      .pipe(map(() => {
        const routeByNames: RouteNamePairModel[] = [];

        this.routes.forEach(route => {
          const p = new RouteNamePairModel();
          p.translatedRouteTitle = this.translate.instant(route.data.title);
          p.routerLink = this.getRouterLink(route);
          routeByNames.push(p);

          if (route.children && route.children.length > 0) {
            route.children.forEach(child => {
              const cp = new RouteNamePairModel();
              cp.translatedRouteTitle = this.translate.instant(child.data.title);
              cp.routerLink = this.getChildRouterLink(route, child);
              routeByNames.push(cp);
            });
          }
        });

        return routeByNames;
      }));
  }

  public getRoutes(): Route[] {
    return this.routes;
  }

  public getRouterLink(route: Route): string {
    return '/' + route.path;
  }

  public getChildRouterLink(parent: Route, child: Route): string {
    return '/' + parent.path + '/' + child.path;
  }

  public getRouterLinkByRouteName(routeName: string): Observable<string> {
    return this.routeByNames$.pipe(map(routesByName => {
      const match = routesByName.filter(r => r.translatedRouteTitle.toUpperCase() === routeName.toUpperCase());

      if (match && match[0]) {
        return match[0].routerLink;
      }

      return null;
    }));
  }

  public displayRoute(route: Route): boolean {
    return route && !isBlankOrEmpty(route.path) && isBlankOrEmpty(route.redirectTo);
  }
}
