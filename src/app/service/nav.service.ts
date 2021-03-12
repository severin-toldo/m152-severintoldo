import { Injectable } from '@angular/core';
import {NavLink} from "../model/nav-link.model";
import {copyrightQARoute, dsvgoRoute, homeRoute, imprintRoute} from "../shared/routes";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public getTopNav(): NavLink[] {
    return [
      new NavLink('INTERCOM.COPYRIGHT.TITLE')
        .addSub(new NavLink('INTERCOM.COPYRIGHT.DSGVO.TITLE', dsvgoRoute()))
        .addSub(new NavLink('INTERCOM.COPYRIGHT.COPYRIGHT_QA.TITLE', copyrightQARoute())),
      new NavLink('INTERCOM.IMPRINT.TITLE', imprintRoute()),
    ];
  }
}
