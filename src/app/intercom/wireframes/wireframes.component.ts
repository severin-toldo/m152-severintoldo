import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-wireframes',
  templateUrl: './wireframes.component.html',
  styleUrls: ['./wireframes.component.scss']
})
export class WireframesComponent implements OnInit {

  constructor(private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document) {
  }

  public ngOnInit(): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://viewer.diagrams.net/js/viewer-static.min.js';

    this.renderer.appendChild(this.document.body, script);
  }
}
