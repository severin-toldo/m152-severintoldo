import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright-qa',
  templateUrl: './copyright-qa.component.html',
  styleUrls: ['./copyright-qa.component.scss']
})
export class CopyrightQAComponent implements OnInit {

  public questionsAndAnswers = new Map<string, string>();

  constructor() {
  }

  public ngOnInit(): void {
    this.questionsAndAnswers.set('Wird ein Impressum vorgeschrieben?', 'Ja, in der Schweiz gilt eine Impressumspflicht (Siehe Gesetz gegen den unlauteren Wettbewerb (UWG))');
    this.questionsAndAnswers.set('Wie kann ich mein Geistiges Eigentum schützen?', 'Gewerblichen Schutzrechte wie Marken, Patente, Designs sowie das Urheberrecht');
    this.questionsAndAnswers.set('Was gibt es für Schutzkriterien?', 'Das Werk muss eine geistige Schöpfung sein und muss individuellen Charakter besitzen.');
    this.questionsAndAnswers.set('Drei Beispiele für Urheberrechtsgeschütze Werke:', '• literarische, wissenschaftliche und andere Sprachwerke<br/>• Werke der Musik und andere akustische Werke <br/>• Werke der bildenden Kunst, insbesondere der Malerei, der Bildhauerei und der Graphik <br/>• Werke mit wissenschaftlichem oder technischem Inhalt wie Zeichnungen, Pläne, Karten oder plastische Darstellungen <br/>• Werke der Baukunst <br/>• Werke der angewandten Kunst <br/>• fotografische, filmische und andere visuelle oder audiovisuelle Werke <br/>• choreographische Werke und Pantomimen');
    this.questionsAndAnswers.set('Können Teile, Entwürfe oder Titel von Werken geschützt werden?', 'Ja, wenn sie die Schutzkriterien erfüllen.');
    this.questionsAndAnswers.set('Wer ist Urheber?', 'Grundsätzlich gilt der bzw. die Erschaffer des Werkes (natürliche Person(en)) als Urheber, wenn nichts anderes bestimmt wurde.');
    this.questionsAndAnswers.set('Welche Rechte hat ein Urheber?', 'Der Urheber hat das Recht auf Erstveröffentlichung, sowie das Recht auf Anerkennung der Urheberschaft.');
    this.questionsAndAnswers.set('Wer kann Urheberrechtsverletzungen verfolgen?', 'Jeder einzelne Miturheber kann Urheberrechtsverletzungen verfolgen.');
    this.questionsAndAnswers.set('Welche Nutzungsrechte hat ein Urheber?', '• Werkexemplare wie Druckerzeugnisse, Ton-, Tonbild- oder Datenträger herzustellen<br/>• Werkexemplare anzubieten, zu veräussern oder sonstwie zu verbreiten<br/>• das Werk direkt oder mit Hilfe irgendwelcher Mittel vorzutragen, aufzuführen, vorzuführen oder es anderswo wahrnehmbar zu machen<br/>• das Werk durch Radio, Fernsehen oder ähnliche Einrichtungen, auch über Leitungen, zu senden<br/>• gesendete Werke mit Hilfe von technischen Einrichtungen, deren Träger nicht das ursprüngliche Sendeunternehmen ist, insbesondere auch über Leitungen, weiterzusenden<br/>• Sendungen und Weitersendungen wahrnehmbar zu machen');
    this.questionsAndAnswers.set('Kann auf das Urheberrecht verzichtet werden?', 'Ja');
    this.questionsAndAnswers.set('Kann das Urheberrecht übertragen werden?', 'Ja, zu beachten ist das in der Schweiz das Urheberrecht auch unter Lebenden übertragen werden kann. Es ist somit übertragbar und vererblich.');
    this.questionsAndAnswers.set('Wie lange ist etwas urheberrechtlich geschützt?', 'Nach dem Tod des Urhebers 70 Jahre, ausser bei Computerprogrammen deren Urheberrechtsschutz läuft bereits nach 50 Jahren aus.');
    this.questionsAndAnswers.set('Was sind und bedeuten Copyrights im Internet?', 'Copyright wird meist mit dem Urheberrecht gleichgesetzt. Das Urheberrecht schützt den Erfinder eines Werkes einschließlich seiner wirtschaftlichen und ideellen Rechte. Im Internet jedoch wird das Copyright oft verletzt. Zum Beispiel Die EU will dagegen mit dem umstrittenen Artikel 13 vorgehen.');
    this.questionsAndAnswers.set('Was sind und bedeuten Lizenzen im Internet', 'Eine Lizenz ist eine Rechtskräftige Erlaubnis ein Werk nutzen zu dürfen. Einige Lizenzen erlauben auch die kommerzielle Nutzung. Bekannte Beispiele für Lizenzen sind die Creative Commons-, GNU GPL- oder MIT-Lizenz.');
    this.questionsAndAnswers.set('Wer hat welche Copyrights auf meinem Internetauftritt?', 'Zurzeit sind alle Inhalte selbst produziert.');
    this.questionsAndAnswers.set('Was ist "public domain"?', 'Wenn jemand auf sein Urheberrecht an einem Werk verzichtet wird dieses Teil der «public domain». Es kann dann frei und ohne Bedingungen genutzt werden.');
    this.questionsAndAnswers.set('Was ist "fair use"?', '«Fair use» erlaubt die Nutzung eines urheberrechtsgeschützten Werkes solange sie der öffentlichen Bildung und der Anregung geistiger Produktionen dienen.');
  }
}

