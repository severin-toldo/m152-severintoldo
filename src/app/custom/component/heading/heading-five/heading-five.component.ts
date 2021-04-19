import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading-five',
  templateUrl: './heading-five.component.html',
  styleUrls: ['./heading-five.component.scss']
})
export class HeadingFiveComponent implements OnInit {

  @Input() public title: string;
  @Input() public centerText = true;
  @Input() public showSpacing = true;


  constructor() {
  }

  public ngOnInit(): void {
  }

}
