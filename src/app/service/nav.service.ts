import { Injectable } from '@angular/core';
import {NavLink} from "../model/nav-link.model";
import {copyrightRoute, dsvgoRoute, homeRoute, imprintRoute} from "../shared/routes";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public getTopNav(): NavLink[] {
    const navLinks = [
      new NavLink('DSVGO', dsvgoRoute()),
      new NavLink('Urheberecht Q&A', copyrightRoute()),
      new NavLink('Impressum', imprintRoute()),
    ];

    return navLinks;
  }

}
