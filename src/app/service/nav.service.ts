import { Injectable } from '@angular/core';
import {NavLink} from "../model/nav-link.model";
import {
  copyrightQARoute,
  dsvgoRoute,
  fileFormatsImageRoute, fileFormatsSoundRoute,
  fileFormatsVideoRoute,
  imprintRoute, wireframesRoute
} from "../shared/routes";

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public getTopNav(): NavLink[] {
    return [
      new NavLink('INTERCOM.COPYRIGHT.TITLE')
        .addSub(new NavLink('INTERCOM.COPYRIGHT.DSGVO.TITLE', dsvgoRoute()))
        .addSub(new NavLink('INTERCOM.COPYRIGHT.COPYRIGHT_QA.TITLE', copyrightQARoute())),
      new NavLink('INTERCOM.FILE_FORMATS.TITLE')
        .addSub(new NavLink('INTERCOM.FILE_FORMATS.IMAGE.TITLE', fileFormatsImageRoute()))
        .addSub(new NavLink('INTERCOM.FILE_FORMATS.VIDEO.TITLE', fileFormatsVideoRoute()))
        .addSub(new NavLink('INTERCOM.FILE_FORMATS.SOUND.TITLE', fileFormatsSoundRoute())),
      new NavLink('INTERCOM.IMPRINT.TITLE', imprintRoute()),
      new NavLink('INTERCOM.WIREFRAMES.TITLE', wireframesRoute()),
    ];
  }
}
