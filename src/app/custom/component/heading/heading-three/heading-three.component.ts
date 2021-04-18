import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading-three',
  templateUrl: './heading-three.component.html',
  styleUrls: ['./heading-three.component.scss']
})
export class HeadingThreeComponent implements OnInit {

  @Input() public title: string;
  @Input() public centerText = true;


  constructor() {
  }

  public ngOnInit(): void {
  }

}
