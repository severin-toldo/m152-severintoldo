import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./intercom/home/home.component";
import {CopyrightQAComponent} from "./intercom/copyright-qa/copyright-qa.component";
import {DsgvoComponent} from "./intercom/dsgvo/dsgvo.component";
import {ImprintComponent} from "./intercom/imprint/imprint.component";

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
    path: 'imprint',
    component: ImprintComponent,
    data: {title: 'INTERCOM.IMPRINT.TITLE'},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
