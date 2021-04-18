import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-guide-colors',
  templateUrl: './style-guide-colors.component.html',
  styleUrls: ['./style-guide-colors.component.scss']
})
export class StyleGuideColorsComponent implements OnInit {

  public readonly COLORS_BODY = this.getColorsBody();


  constructor() {
  }

  public ngOnInit(): void {
  }

  private getColorsBody(): string {
    return 'Um neue Kunden zu gewinnen, muss zuerst die emotionale Gehirnhälfte angesprochen werden. Die Farbe «Primary» (Rot) ist eine der am emotionalsten wahrgenommenen Farben und zieht die Aufmerksamkeit sofort auf sich. (vgl. Firmenphilosophie und Ziele)' +
      '<br/><br/>' +
      'Die Farben «Secondary» und «Light» ermöglichen ein dynamisches und akzentuiertes, aber dennoch konsistentes Design der Webseite.' +
      '<br/><br/>' +
      'Für wichtige Benachrichtigen wie Erfolge, Warnungen und Fehler sollen die Farben «Success», «Warning» und «Danger» zum Einsatz kommen, da diese das jeweilige Vorkommnis sofort visuell darstellen.';
  }

}
