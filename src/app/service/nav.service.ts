import { Injectable } from '@angular/core';
import {NavLink} from "../model/nav-link.model";
import {copyrightRoute, dsvgoRoute, homeRoute, imprintRoute} from "../shared/routes";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public getTopNav(): NavLink[] {
    const navLinks = [
      new NavLink('INTERCOM.DSGVO.TITLE', dsvgoRoute()),
      new NavLink('INTERCOM.COPYRIGHT.TITLE', copyrightRoute()),
      new NavLink('INTERCOM.IMPRINT.TITLE', imprintRoute()),
    ];

    return navLinks;
  }

}
