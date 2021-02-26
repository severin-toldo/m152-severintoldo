import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateExampleComponent } from './components/template-example/template-example.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToasterModule} from "angular2-toaster";
import { CookieWarningComponent } from './components/cookie-warning/cookie-warning.component';
import { CopyrightComponent } from './intercom/copyright/copyright.component';
import { DsgvoComponent } from './intercom/dsgvo/dsgvo.component';
import { ImprintComponent } from './intercom/imprint/imprint.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './intercom/home/home.component';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

// const cookieConfig:NgcCookieConsentConfig = {
//   cookie: {
//     domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
//   },
//   palette: {
//     popup: {
//       background: '#000'
//     },
//     button: {
//       background: '#f1d600'
//     }
//   },
//   theme: 'edgeless',
//   type: 'opt-out'
// };

@NgModule({
  declarations: [
    AppComponent,
    TemplateExampleComponent,
    CookieWarningComponent,
    CopyrightComponent,
    DsgvoComponent,
    ImprintComponent,
    NavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    ToasterModule.forRoot(),
    NgbModule,

    // NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
