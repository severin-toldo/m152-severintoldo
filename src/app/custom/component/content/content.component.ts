import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() public title: string;
  @Input() public heading = 'h1';
  @Input() public body: string;
  @Input() public centerText = true;


  constructor() {
  }

  public ngOnInit(): void {
  }

}
