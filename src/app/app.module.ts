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
import {AlertTriangle, Menu, Twitch, User, Volume2} from "angular-feather/icons";
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
import { StyleGuideColorsComponent } from './intercom/style-guide/style-guide-colors/style-guide-colors.component';
import { StyleGuideTypographyComponent } from './intercom/style-guide/style-guide-typography/style-guide-typography.component';
import { StyleGuideControlsComponent } from './intercom/style-guide/style-guide-controls/style-guide-controls.component';
import { TableComponent } from './custom/component/table/table.component';
import { ImageComponent } from './custom/component/image/image.component';
import { StyleGuideColorPaletteComponent } from './intercom/style-guide/style-guide-colors/style-guide-color-palette/style-guide-color-palette.component';
import { HeadingOneComponent } from './custom/component/heading/heading-one/heading-one.component';
import { HeadingTwoComponent } from './custom/component/heading/heading-two/heading-two.component';
import { HeadingThreeComponent } from './custom/component/heading/heading-three/heading-three.component';
import { HeadingFourComponent } from './custom/component/heading/heading-four/heading-four.component';
import { HeadingFiveComponent } from './custom/component/heading/heading-five/heading-five.component';
import {ToastrModule} from "ngx-toastr";
import { ContactComponent } from './intercom/contact/contact.component';
import { FooterComponent } from './custom/snippet/footer/footer.component';
import { AnimationsComponent } from './intercom/animations/animations.component';
import { AppearDirective } from './custom/directive/appear.directive';
import { GalleryComponent } from './intercom/gallery/gallery.component';
import { ChatBotComponent } from './custom/snippet/chat-bot/chat-bot.component';
import { ChatBotMessageComponent } from './custom/snippet/chat-bot/chat-bot-message/chat-bot-message.component';


export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

const translateModuleConfig = {
  defaultLanguage: 'de',
  loader: {
    provide: TranslateLoader,
    useFactory: httpLoaderFactory,
    deps: [HttpClient],
  },
};

const featherModuleConfig = {
  Menu,
  AlertTriangle,
  Volume2,
  User,
  Twitch
};

const toastrModuleConfig = {
  positionClass: 'toast-bottom-right',
};


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
    StyleGuideColorsComponent,
    StyleGuideTypographyComponent,
    StyleGuideControlsComponent,
    TableComponent,
    ImageComponent,
    StyleGuideColorPaletteComponent,
    HeadingOneComponent,
    HeadingTwoComponent,
    HeadingThreeComponent,
    HeadingFourComponent,
    HeadingFiveComponent,
    ContactComponent,
    FooterComponent,
    AnimationsComponent,
    AppearDirective,
    GalleryComponent,
    ChatBotComponent,
    ChatBotMessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    NgbModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    ToasterModule.forRoot(),
    ToastrModule.forRoot(toastrModuleConfig),
    TranslateModule.forRoot(translateModuleConfig),
    FeatherModule.pick(featherModuleConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
