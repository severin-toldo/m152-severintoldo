import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from "angular2-toaster";
import {Subscription} from "rxjs";
import {
  NgcCookieConsentService,
  NgcInitializeEvent,
  NgcNoCookieLawEvent,
  NgcStatusChangeEvent
} from "ngx-cookieconsent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {

  public toasterConfig : ToasterConfig = new ToasterConfig({
    positionClass: 'toast-bottom-full-width',
  });

  public clicked = false;

  // private popupOpenSubscription: Subscription;
  // private popupCloseSubscription: Subscription;
  // private initializeSubscription: Subscription;
  // private statusChangeSubscription: Subscription;
  // private revokeChoiceSubscription: Subscription;
  // private noCookieLawSubscription: Subscription;


  constructor(private toasterService: ToasterService) {
  }

  public ngAfterViewInit(): void {
    // const toast : Toast = {
    //   type: 'warning',
    //   // title: 'Title text',
    //   body: 'This website uses cookies to ensure you get the best experience on our website. Learn more',
    //   // body: CustomToastComponent,
    //   // bodyOutputType: BodyOutputType.Component,
    //   timeout: 0, // sticky
    //   tapToDismiss: false,
    //   onClickCallback: (toast: Toast) => {
    //     console.log(toast);
    //   },
    //   showCloseButton: true,
    //   closeHtml: '<button class="mt-3 mr-3">Got it</button>'
    // };

    // this.toasterService.pop(toast);

  }

  public onClick() {
    this.clicked = true;
  }

  ngOnInit(): void {
    // // subscribe to cookieconsent observables to react to main events
    // this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
    //   () => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //   });
    //
    // this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
    //   () => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //   });
    //
    // this.initializeSubscription = this.ccService.initialize$.subscribe(
    //   (event: NgcInitializeEvent) => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //   });
    //
    // this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
    //   (event: NgcStatusChangeEvent) => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //   });
    //
    // this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
    //   () => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //   });
    //
    // this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
    //   (event: NgcNoCookieLawEvent) => {
    //     // you can use this.ccService.getConfig() to do stuff...
    //   });
  }

  ngOnDestroy(): void {
    // this.popupOpenSubscription.unsubscribe();
    // this.popupCloseSubscription.unsubscribe();
    // this.initializeSubscription.unsubscribe();
    // this.statusChangeSubscription.unsubscribe();
    // this.revokeChoiceSubscription.unsubscribe();
    // this.noCookieLawSubscription.unsubscribe();
  }
}
