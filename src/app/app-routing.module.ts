import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./intercom/home/home.component";
import {CopyrightQAComponent} from "./intercom/copyright/copyright-qa/copyright-qa.component";
import {DsgvoComponent} from "./intercom/copyright/dsgvo/dsgvo.component";
import {ImprintComponent} from "./intercom/imprint/imprint.component";
import {FileFormatsImageComponent} from "./intercom/file-formats/file-formats-image/file-formats-image.component";
import {FileFormatsVideoComponent} from "./intercom/file-formats/file-formats-video/file-formats-video.component";
import {FileFormatsSoundComponent} from "./intercom/file-formats/file-formats-sound/file-formats-sound.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {title: 'Home'},
  },
  {
    path: 'imprint',
    component: ImprintComponent,
    data: {title: 'INTERCOM.IMPRINT.TITLE'},
  },
  {
    path: 'copyright',
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
export class AppRoutingModule { }
