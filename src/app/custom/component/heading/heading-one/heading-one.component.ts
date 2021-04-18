import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading-one',
  templateUrl: './heading-one.component.html',
  styleUrls: ['./heading-one.component.scss']
})
export class HeadingOneComponent implements OnInit {

  @Input() public title: string;
  @Input() public centerText = true;


  constructor() {
  }

  public ngOnInit(): void {
  }

}
