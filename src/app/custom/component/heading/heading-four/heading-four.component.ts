import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-heading-four',
  templateUrl: './heading-four.component.html',
  styleUrls: ['./heading-four.component.scss']
})
export class HeadingFourComponent implements OnInit {

  @Input() public title: string;
  @Input() public centerText = true;


  constructor() {
  }

  public ngOnInit(): void {
  }

}
