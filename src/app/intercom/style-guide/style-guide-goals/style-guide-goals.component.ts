import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-guide-goals',
  templateUrl: './style-guide-goals.component.html',
  styleUrls: ['./style-guide-goals.component.scss']
})
export class StyleGuideGoalsComponent implements OnInit {

  public readonly COMPANY_PHILOSOPHY_BODY = this.getCompanyPhilosophyBody();
  public readonly COMPANY_GOALS_BODY = this.getGoalsBody();


  constructor() {
  }

  public ngOnInit(): void {
  }

  private getCompanyPhilosophyBody(): string {
    return 'Die Severin-Toldo GmbH will möglichst vielen Firmen einen professionellen und kompetenten Webauftritt ermöglichen. Viele Unternehmungen haben auch noch im 21. Jahrhundert nur einen hilfsbedürftigen oder gar keinen. Webauftritt. Das möchte die Severin-Toldo GmbH ändern!';
  }

  private getGoalsBody(): string {
    return 'Diese Webseite soll als Muster bzw. Demo für potenzielle Kunden dienen. Sie umfasst zahlreiche, häufig gebrauchte Web-Komponenten. Kunden sollen diese direkt ausprobieren können und schlussendlich eine erste Idee erhalten wie ihr Webauftritt aussehen könnte.';
  }

}
