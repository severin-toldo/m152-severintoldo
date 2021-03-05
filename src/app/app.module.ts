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
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { ContentComponent } from './components/content/content.component';


export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    ContentComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
