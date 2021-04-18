import { Component, OnInit } from '@angular/core';
import {Column} from "../../../model/column.model";
import {EMPTY_VALUE} from "../../../shared/other.util";

@Component({
  selector: 'app-style-guide-typography',
  templateUrl: './style-guide-typography.component.html',
  styleUrls: ['./style-guide-typography.component.scss']
})
export class StyleGuideTypographyComponent implements OnInit {

  public columns: Column[] = [
    {
      title: 'title',
      name: 'title'
    },
    {
      title: 'body',
      name: 'body'
    }
  ];

  public rows = [
    {
      title: '<b>Schriftart</b>',
      body: 'BlinkMacSystemFont, sans-serif'
    },
    {
      title: EMPTY_VALUE,
      body: EMPTY_VALUE
    },
    {
      title: '<b>Schriftgrösse (Standard)</b>',
      body: '1.0 rem'
    },
    {
      title: '<b>Schriftgrösse (Überschrift 1)</b>',
      body: '2.5 rem'
    },
    {
      title: '<b>Schriftgrösse (Überschrift 2)</b>',
      body: '2.0 rem'
    },
    {
      title: '<b>Schriftgrösse (Überschrift 3)</b>',
      body: '1.75 rem'
    },
    {
      title: '<b>Schriftgrösse (Überschrift 4)</b>',
      body: '1.5 rem'
    },
    {
      title: '<b>Schriftgrösse (Überschrift 5)</b>',
      body: '1.25 rem'
    },
    {
      title: EMPTY_VALUE,
      body: EMPTY_VALUE
    },
    {
      title: '<b>Schriftfarbe («Primary» Hintergrund)</b>',
      body: '«White»'
    },
    {
      title: '<b>Schriftfarbe («Light» Hintergrund)</b>',
      body: '«Secondary»'
    },
    {
      title: '<b>Schriftfarbe («White» Hintergrund)</b>',
      body: '«Primary»'
    },
    {
      title: '<b>Schriftfarbe (Hyperlinks)</b>',
      body: '«Primary»'
    },
  ];


  constructor() {
  }

  public ngOnInit(): void {
  }

}
