import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {HomeComponent} from "./intercom/home/home.component";
import {CopyrightQAComponent} from "./intercom/copyright/copyright-qa/copyright-qa.component";
import {DsgvoComponent} from "./intercom/copyright/dsgvo/dsgvo.component";
import {ImprintComponent} from "./intercom/imprint/imprint.component";
import {FileFormatsImageComponent} from "./intercom/file-formats/file-formats-image/file-formats-image.component";
import {FileFormatsVideoComponent} from "./intercom/file-formats/file-formats-video/file-formats-video.component";
import {FileFormatsSoundComponent} from "./intercom/file-formats/file-formats-sound/file-formats-sound.component";
import {SitemapComponent} from "./intercom/sitemap/sitemap.component";
import {WireframesComponent} from "./intercom/wireframes/wireframes.component";
import {StyleGuideColorsComponent} from "./intercom/style-guide/style-guide-colors/style-guide-colors.component";
import {StyleGuideDosDontsComponent} from "./intercom/style-guide/style-guide-dos-donts/style-guide-dos-donts.component";
import {StyleGuideGoalsComponent} from "./intercom/style-guide/style-guide-goals/style-guide-goals.component";
import {StyleGuideLogoBrandComponent} from "./intercom/style-guide/style-guide-logo-brand/style-guide-logo-brand.component";
import {StyleGuideTargetAudienceComponent} from "./intercom/style-guide/style-guide-target-audience/style-guide-target-audience.component";
import {StyleGuideTypographyComponent} from "./intercom/style-guide/style-guide-typography/style-guide-typography.component";
import {StyleGuideWordingContentComponent} from "./intercom/style-guide/style-guide-wording-content/style-guide-wording-content.component";
import {StyleGuideControlsComponent} from "./intercom/style-guide/style-guide-controls/style-guide-controls.component";
import {ContactComponent} from "./intercom/contact/contact.component";
import {AnimationsComponent} from "./intercom/animations/animations.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'INTERCOM.HOME.TITLE'},
  },
  {
    path: 'imprint',
    component: ImprintComponent,
    data: {title: 'INTERCOM.IMPRINT.TITLE'},
  },
  {
    path: 'sitemap',
    component: SitemapComponent,
    data: {title: 'INTERCOM.SITEMAP.TITLE'},
  },
  {
    path: 'wireframes',
    component: WireframesComponent,
    data: {title: 'INTERCOM.WIREFRAMES.TITLE'},
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {title: 'INTERCOM.CONTACT.TITLE'},
  },
  {
    path: 'animations',
    component: AnimationsComponent,
    data: {title: 'INTERCOM.ANIMATIONS.TITLE'},
  },
  {
    path: 'copyright',
    redirectTo: 'copyright/dsgvo'
  },
  {
    path: 'copyright',
    data: {title: 'INTERCOM.COPYRIGHT.TITLE'},
    children: [
      {
        path: 'dsgvo',
        component: DsgvoComponent,
        data: {title: 'INTERCOM.COPYRIGHT.DSGVO.TITLE'},
      },
      {
        path: 'copyright-qa',
        component: CopyrightQAComponent,
        data: {title: 'INTERCOM.COPYRIGHT.COPYRIGHT_QA.TITLE'},
      }
    ],
  },
  {
    path: 'file-formats',
    redirectTo: 'file-formats/image'
  },
  {
    path: 'file-formats',
    data: {title: 'INTERCOM.FILE_FORMATS.TITLE'},
    children: [
      {
        path: 'image',
        component: FileFormatsImageComponent,
        data: {title: 'INTERCOM.FILE_FORMATS.IMAGE.TITLE'},
      },
      {
        path: 'video',
        component: FileFormatsVideoComponent,
        data: {title: 'INTERCOM.FILE_FORMATS.VIDEO.TITLE'},
      },
      {
        path: 'sound',
        component: FileFormatsSoundComponent,
        data: {title: 'INTERCOM.FILE_FORMATS.SOUND.TITLE'},
      }
    ],
  },
  {
    path: 'style-guide',
    redirectTo: 'style-guide/goals'
  },
  {
    path: 'style-guide',
    data: {title: 'INTERCOM.STYLE_GUIDE.TITLE'},
    children: [
      {
        path: 'goals',
        component: StyleGuideGoalsComponent,
        data: {title: 'INTERCOM.STYLE_GUIDE.GOALS.TITLE'},
      },
      {
        path: 'dos-donts',
        component: StyleGuideDosDontsComponent,
        data: {title: 'INTERCOM.STYLE_GUIDE.DOS_DONTS.TITLE'},
      },
      {
        path: 'logo-brand',
        component: StyleGuideLogoBrandComponent,
        data: {title: 'INTERCOM.STYLE_GUIDE.LOGO_BRAND.TITLE'},
      },
      {
        path: 'target-audience',
        component: StyleGuideTargetAudienceComponent,
        data: {title: 'INTERCOM.STYLE_GUIDE.TARGET_AUDIENCE.TITLE'},
      },
      {
        path: 'colors',
        component: StyleGuideColorsComponent,
        data: {title: 'INTERCOM.STYLE_GUIDE.COLORS.TITLE'},
      },
      {
        path: 'typography',
        component: StyleGuideTypographyComponent,
        data: {title: 'INTERCOM.STYLE_GUIDE.TYPOGRAPHY.TITLE'},
      },
      {
        path: 'wording-content',
        component: StyleGuideWordingContentComponent,
        data: {title: 'INTERCOM.STYLE_GUIDE.WORDING_CONTENT.TITLE'},
      },
      {
        path: 'controls',
        component: StyleGuideControlsComponent,
        data: {title: 'INTERCOM.STYLE_GUIDE.CONTROLS.TITLE'},
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  public static getRoutes(): Route[] {
    return routes;
  }

}
