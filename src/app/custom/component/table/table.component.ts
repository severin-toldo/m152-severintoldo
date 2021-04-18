import {Component, Input, OnInit} from '@angular/core';
import {Column} from "../../../model/column.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public columns: Column[];
  @Input() public rows: any[];
  @Input() public hideHeader = false;
  @Input() public hideBorders = false;


  constructor() {
  }

  public ngOnInit(): void {
  }

}
