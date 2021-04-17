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
