import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-guide-logo-brand',
  templateUrl: './style-guide-logo-brand.component.html',
  styleUrls: ['./style-guide-logo-brand.component.scss']
})
export class StyleGuideLogoBrandComponent implements OnInit {

  public readonly LOGO_BRAND_BODY = this.getLogoBrandBody();


  constructor() {
  }

  public ngOnInit(): void {
  }

  private getLogoBrandBody(): string {
    return 'Das Logo der Severin-Toldo GmbH kann entweder eigenständig oder zusammen mit dem Schriftzug «Severin-Toldo GmbH» verwendet werden. Auch das Verwenden des eigenständigen Schriftzugs «Severin-Toldo GmbH» ist zulässig. Dabei ist wichtig, sowohl die untenstehenden Logo Vorgaben als auch die Typographischen Vorgaben im Kapitel «Typographie» zu befolgen.' +
      '<br/><br/>' +
      'In der Navigationsleiste darf nur der Schriftzug verwendet werden.' +
      '<br/><br/>' +
      'In Dokumenten darf nur die Logo-Schriftzug-Kombination verwendet werden.' +
      '<br/><br/>' +
      'Als Favoriten-Icon darf nur das Logo an sich verwendet werden.';
  }

}
