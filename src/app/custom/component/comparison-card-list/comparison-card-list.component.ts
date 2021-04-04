import {Component, Input, OnInit} from '@angular/core';
import {ComparisonCategory} from "../../../model/comparison-category.model";

@Component({
  selector: 'app-comparison-card-list',
  templateUrl: './comparison-card-list.component.html',
  styleUrls: ['./comparison-card-list.component.scss']
})
export class ComparisonCardListComponent implements OnInit {

  @Input() public title: string;
  @Input() public comparisonCategories: ComparisonCategory[];

  constructor() {
  }

  public ngOnInit(): void {
  }

}
