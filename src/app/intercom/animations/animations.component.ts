import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {

  public readonly ANIMATIONS_BODY = this.getAnimationsBody();
  public readonly TRANSFORMATION_BODY = this.getTransformationBody();
  public readonly TRANSLATION_BODY = this.getTranslationBody();
  public readonly TRANSITION_BODY = this.getTransitionBody();
  public readonly SVG_ANIMATION_BODY = this.getSvgAnimationBody();
  public readonly GIF_ANIMATION_BODY = this.getGifAnimationBody();
  public readonly HTML5_CANVAS_BODY = this.getHtml5CanvasBody();

  @ViewChild('transitionExampleDiv') public transitionExampleDiv: ElementRef<HTMLDivElement>;
  @ViewChild('exampleCanvas') public exampleCanvas: ElementRef<HTMLCanvasElement>;


  constructor() {
  }

  public ngOnInit(): void {
  }

  public triggerJumpAnimation(): void {
    this.transitionExampleDiv.nativeElement.className = 'transitionExampleDivAnimation';

    setTimeout(() => {
      this.transitionExampleDiv.nativeElement.className = '';
    }, 2000);
  }

  public drawCanvas(): void {
    const context = this.exampleCanvas.nativeElement.getContext("2d");
    context.beginPath();
    context.arc(95,50,40,0,2 * Math.PI);
    context.stroke();
  }

  public onAppear(element): void {
    element.className = 'fade-in';
  }

  private getAnimationsBody(): string {
    return 'Animationen sind Darstellungselemente, welche sich über die Zeit verändern. Animationen können auf viele Arten erstellt werden, im Folgenden werden die im Web am häufigsten verwendeten Formen von Animationen vorgestellt.';
  }

  private getTransformationBody(): string {
    return 'Beschreibt die Formänderung grafischer Merkmale eines Darstellungselementes hinsichtlich Größe, Form, Farbe oder Textur.';
  }

  private getTranslationBody(): string {
    return 'Beschreibt die Veränderung der Position eines Darstellungselementes. Diese Bewegung steht entweder in Bezug auf den Rand der Animation oder relativ zu anderen Elementen innerhalb der Animation.';
  }

  private getTransitionBody(): string {
    return 'Beschreibt den Übergang zwischen zwei definierten Zuständen eines Darstellungselementes. Diese Zustandsänderung wird durch eine Userinteraktion ausgelöst.';
  }

  private getSvgAnimationBody(): string {
    return 'SVG Animation bezeichnet die Animation einer skalierbaren Vektorgrafik (SVG). Dies kann mit SMIL, CSS oder ECMAScript realisiert werden.';
  }

  private getGifAnimationBody(): string {
    return 'GIF Animation bezeichnet die Animation durch verwenden von mehreren, hintereinander folgenden GIF Bildern, welche schlussendlich zu einer Animation fusioniert werden. Ein hervorragendes Tool für die Erstellung von GIF Animationen ist <a class="text-primary" href="https://gif-erstellen.com/" target="_blank">https://gif-erstellen.com/</a>.';
  }

  private getHtml5CanvasBody(): string {
    return 'Canvas bedeutet soviel wie «Leinwand» oder «Gemälde». In HTML-5 bezeichnet der Begriff Canvas einen Bereich, auf welchem mittels JavaScript «gezeichnet» werden kann.';
  }

}
