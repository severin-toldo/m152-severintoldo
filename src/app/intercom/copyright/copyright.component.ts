import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {

  public questionsAndAnswers = new Map<string, string>();

  constructor() {
  }

  public ngOnInit(): void {
    this.questionsAndAnswers.set('Wird ein Impressum vorgeschrieben?', 'Ja, in der Schweiz gilt eine Impressumspflicht (Siehe Gesetz gegen den unlauteren Wettbewerb (UWG))');
    this.questionsAndAnswers.set('Wie kann ich mein Geistiges Eigentum schützen?', 'Gewerblichen Schutzrechte wie Marken, Patente, Designs sowie das Urheberrecht');
    this.questionsAndAnswers.set('Was gibt es für Schutzkriterien?', 'Das Werk muss eine geistige Schöpfung sein und muss individuellen Charakter besitzen.');
    this.questionsAndAnswers.set('Nennen sie 3 Beispiel für Urheberrechtsgeschütze Werke', 'a. literarische, wissenschaftliche und andere Sprachwerke\n' +
      'b. Werke der Musik und andere akustische Werke\n' +
      'c. Werke der bildenden Kunst, insbesondere der Malerei, der Bildhauerei und der Graphik\n' +
      'd. Werke mit wissenschaftlichem oder technischem Inhalt wie Zeichnungen, Pläne, Karten oder plastische Darstellungen\n' +
      'e. Werke der Baukunst\n' +
      'f. Werke der angewandten Kunst\n' +
      'g. fotografische, filmische und andere visuelle oder audiovisuelle Werke\n' +
      'h. choreographische Werke und Pantomimen');
    this.questionsAndAnswers.set('Können Teile, Entwürfe oder Titel von Werken geschützt werden?', 'Ja, wenn sie die Schutzkriterien erfüllen.');
    this.questionsAndAnswers.set('Wer ist Urheber?', 'Grundsätzlich gilt der bzw. die Erschaffer des Werkes (natürliche Person(en)) als Urheber, wenn nichts anderes bestimmt wurde.');
    this.questionsAndAnswers.set('Welche Rechte hat ein Urheber?', 'Der Urheber hat das Recht auf Erstveröffentlichung, sowie das Recht auf Anerkennung der Urheberschaft.');
    this.questionsAndAnswers.set('Wer kann Urheberrechtsverletzungen verfolgen?', 'Jeder einzelne Miturheber kann Urheberrechtsverletzungen verfolgen.');
    this.questionsAndAnswers.set('Welche Nutzungsrechte hat ein Urheber?', 'a. Werkexemplare wie Druckerzeugnisse, Ton-, Tonbild- oder Datenträger herzustellen\n' +
      'b. Werkexemplare anzubieten, zu veräussern oder sonstwie zu verbreiten\n' +
      'c. das Werk direkt oder mit Hilfe irgendwelcher Mittel vorzutragen, aufzuführen, vorzuführen oder es anderswo wahrnehmbar zu machen\n' +
      'd. das Werk durch Radio, Fernsehen oder ähnliche Einrichtungen, auch über Leitungen, zu senden\n' +
      'e. gesendete Werke mit Hilfe von technischen Einrichtungen, deren Träger nicht das ursprüngliche Sendeunternehmen ist, insbesondere auch über Leitungen, weiterzusenden\n' +
      'f. Sendungen und Weitersendungen wahrnehmbar zu machen');
    this.questionsAndAnswers.set('Kann auf das Urheberrecht verzichtet werden?', 'Ja');
    this.questionsAndAnswers.set('Kann das Urheberrecht übertragen werden?', 'Ja, zu beachten ist das in der Schweiz das Urheberrecht auch unter Lebenden übertragen werden kann. Es ist somit übertragbar und vererblich.');
    this.questionsAndAnswers.set('Wie lange ist etwas urheberrechtlich geschützt?', 'Nach dem Tod des Urhebers 70 Jahre, ausser bei Computerprogrammen deren Urheberrechtsschutz läuft bereits nach 50 Jahren aus.');
  }
}

