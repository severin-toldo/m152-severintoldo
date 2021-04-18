import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-guide-target-audience',
  templateUrl: './style-guide-target-audience.component.html',
  styleUrls: ['./style-guide-target-audience.component.scss']
})
export class StyleGuideTargetAudienceComponent implements OnInit {

  public readonly TARGET_AUDIENCE_BODY = this.getTargetAudienceBody();


  constructor() {
  }

  public ngOnInit(): void {
  }

  public getTargetAudienceBody(): string {
    return 'Diese Webseite soll sich an eine breite Masse an Firmen richten, die noch keinen Webauftritt haben. Meist sind dies etwas in die Jahre gekommene Einzelunternehmungen oder KMUs. <br/> <br/> Diese Unternehmungen brauchen einen modernen, aber dennoch professionellen Webauftritt, dessen Erstellung zudem preiswert ist.';
  }

}
