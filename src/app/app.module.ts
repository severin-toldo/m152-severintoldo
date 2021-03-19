import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToasterModule} from "angular2-toaster";
import { CookieWarningComponent } from './custom/snippet/cookie-warning/cookie-warning.component';
import { CopyrightQAComponent } from './intercom/copyright/copyright-qa/copyright-qa.component';
import { DsgvoComponent } from './intercom/copyright/dsgvo/dsgvo.component';
import { ImprintComponent } from './intercom/imprint/imprint.component';
import { NavComponent } from './custom/snippet/nav/nav.component';
import { HomeComponent } from './intercom/home/home.component';
import {NgbCollapseModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { ContentComponent } from './custom/component/content/content.component';
import {FeatherModule} from "angular-feather";
import {Menu} from "angular-feather/icons";
import { NavLinkComponent } from './custom/snippet/nav/nav-link/nav-link.component';
import { DefaultOrderKeyvaluePipe } from './custom/pipe/default-order-keyvalue.pipe';


export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CookieWarningComponent,
    CopyrightQAComponent,
    DsgvoComponent,
    ImprintComponent,
    NavComponent,
    HomeComponent,
    ContentComponent,
    NavLinkComponent,
    DefaultOrderKeyvaluePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    ToasterModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FeatherModule.pick({
      Menu
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
