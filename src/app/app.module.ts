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
import {AlertTriangle, Menu, Volume2} from "angular-feather/icons";
import { NavLinkComponent } from './custom/snippet/nav/nav-link/nav-link.component';
import { DefaultOrderKeyvaluePipe } from './custom/pipe/default-order-keyvalue.pipe';
import { FileFormatsImageComponent } from './intercom/file-formats/file-formats-image/file-formats-image.component';
import { FileFormatsVideoComponent } from './intercom/file-formats/file-formats-video/file-formats-video.component';
import { FileFormatsSoundComponent } from './intercom/file-formats/file-formats-sound/file-formats-sound.component';
import { ComparisonCardListComponent } from './custom/component/comparison-card-list/comparison-card-list.component';
import { VideoPlayerComponent } from './custom/component/video-player/video-player.component';
import { ImageViewerComponent } from './custom/component/image-viewer/image-viewer.component';
import { ImageViewerModalComponent } from './custom/component/image-viewer/image-viewer-modal/image-viewer-modal.component';
import {ModalModule} from "ngx-bootstrap/modal";
import {CarouselModule} from "ngx-bootstrap/carousel";
import { AudioPlayerComponent } from './custom/component/audio-player/audio-player.component';
import { SitemapComponent } from './intercom/sitemap/sitemap.component';
import { WireframesComponent } from './intercom/wireframes/wireframes.component';
import { StyleGuideGoalsComponent } from './intercom/style-guide/style-guide-goals/style-guide-goals.component';
import { StyleGuideDosDontsComponent } from './intercom/style-guide/style-guide-dos-donts/style-guide-dos-donts.component';
import { StyleGuideTargetAudienceComponent } from './intercom/style-guide/style-guide-target-audience/style-guide-target-audience.component';
import { StyleGuideWordingContentComponent } from './intercom/style-guide/style-guide-wording-content/style-guide-wording-content.component';
import { StyleGuideLogoBrandComponent } from './intercom/style-guide/style-guide-logo-brand/style-guide-logo-brand.component';
import { StyleGuideBaseStructureComponent } from './intercom/style-guide/style-guide-base-structure/style-guide-base-structure.component';
import { StyleGuideColorsComponent } from './intercom/style-guide/style-guide-colors/style-guide-colors.component';
import { StyleGuideTypographyComponent } from './intercom/style-guide/style-guide-typography/style-guide-typography.component';
import { StyleGuideControlsComponent } from './intercom/style-guide/style-guide-controls/style-guide-controls.component';
import { TableComponent } from './custom/component/table/table.component';


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
    FileFormatsImageComponent,
    FileFormatsVideoComponent,
    FileFormatsSoundComponent,
    ComparisonCardListComponent,
    VideoPlayerComponent,
    ImageViewerComponent,
    ImageViewerModalComponent,
    AudioPlayerComponent,
    SitemapComponent,
    WireframesComponent,
    StyleGuideGoalsComponent,
    StyleGuideDosDontsComponent,
    StyleGuideTargetAudienceComponent,
    StyleGuideWordingContentComponent,
    StyleGuideLogoBrandComponent,
    StyleGuideBaseStructureComponent,
    StyleGuideColorsComponent,
    StyleGuideTypographyComponent,
    StyleGuideControlsComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    ToasterModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
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
      Menu,
      AlertTriangle,
      Volume2
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
