import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CopyrightComponent} from "./copyright/copyright.component";
import {DsgvoComponent} from "./dsgvo/dsgvo.component";
import {ImprintComponent} from "./imprint/imprint.component";

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
    component: CopyrightComponent,
    data: {title: 'Urheberecht'},
  },
  {
    path: 'dsgvo',
    component: DsgvoComponent,
    data: {title: 'DSGVO'},
  },
  {
    path: 'imprint',
    component: ImprintComponent,
    data: {title: 'Impressum'},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
