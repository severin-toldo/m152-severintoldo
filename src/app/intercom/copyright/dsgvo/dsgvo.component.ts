import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsgvo',
  templateUrl: './dsgvo.component.html',
  styleUrls: ['./dsgvo.component.scss']
})
export class DsgvoComponent implements OnInit {

  public readonly DSGVO_BODY = this.getDsgvoBody();

  constructor() {
  }

  ngOnInit(): void {
  }

  private getDsgvoBody(): string {
    return 'DSGVO steht für Datenschutz-Grundverordnung und ist eine Verordnung der Europäischen Union mit der die Verarbeitung von personenbezogenen Daten EU-weit gesetzlich geregelt wird. Teil dieser personenbezogenen Daten sind Cookies, spezielle Cookies der Erst- und Drittanbieter-Provenienz. Neu müssen alle Webseiten mit Nutzern aus dem EU-Raum eine DSGVO konforme Cookie Warnung anzeigen, ein wie bislang oft verwendeter Hinweis genügt nicht mehr.';
  }

}
