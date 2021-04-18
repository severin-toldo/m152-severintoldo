import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-style-guide-color-palette',
  templateUrl: './style-guide-color-palette.component.html',
  styleUrls: ['./style-guide-color-palette.component.scss']
})
export class StyleGuideColorPaletteComponent implements OnInit {

  @Input() public colorHex: string;
  @Input() public colorName: string;


  constructor() {
  }

  public ngOnInit(): void {
  }

}
