import { Injectable } from '@angular/core';
import {NavLink} from "../model/nav-link.model";
import {
  copyrightQARoute,
  dsvgoRoute,
  fileFormatsImageRoute,
  fileFormatsSoundRoute,
  fileFormatsVideoRoute,
  imprintRoute,
  styleGuideBaseStructureRoute,
  styleGuideColorsRoute, styleGuideControlsRoute,
  styleGuideDosDontsRoute,
  styleGuideGoalsRoute,
  styleGuideLogoBrandRoute,
  styleGuideTargetAudienceRoute,
  styleGuideTypographyRoute,
  styleGuideWordingContentRoute,
  wireframesRoute
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
      new NavLink('INTERCOM.STYLE_GUIDE.TITLE')
        .addSub(new NavLink('INTERCOM.STYLE_GUIDE.GOALS.TITLE', styleGuideGoalsRoute()))
        .addSub(new NavLink('INTERCOM.STYLE_GUIDE.DOS_DONTS.TITLE', styleGuideDosDontsRoute()))
        .addSub(new NavLink('INTERCOM.STYLE_GUIDE.LOGO_BRAND.TITLE', styleGuideLogoBrandRoute()))
        .addSub(new NavLink('INTERCOM.STYLE_GUIDE.TARGET_AUDIENCE.TITLE', styleGuideTargetAudienceRoute()))
        .addSub(new NavLink('INTERCOM.STYLE_GUIDE.COLORS.TITLE', styleGuideColorsRoute()))
        .addSub(new NavLink('INTERCOM.STYLE_GUIDE.TYPOGRAPHY.TITLE', styleGuideTypographyRoute()))
        .addSub(new NavLink('INTERCOM.STYLE_GUIDE.WORDING_CONTENT.TITLE', styleGuideWordingContentRoute()))
        .addSub(new NavLink('INTERCOM.STYLE_GUIDE.BASE_STRUCTURE.TITLE', styleGuideBaseStructureRoute()))
        .addSub(new NavLink('INTERCOM.STYLE_GUIDE.CONTROLS.TITLE', styleGuideControlsRoute()))
    ];
  }
}
