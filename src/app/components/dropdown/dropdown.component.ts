import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectOption} from "../../model/select-option.model";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() public label: string;
  @Input() public selectOptions: SelectOption[];
  @Input() public customClass: string;
  @Input() public customMenuClass: string;

  @Output() public onSelect = new EventEmitter<SelectOption>();

  constructor() {
  }

  public ngOnInit(): void {
  }

  public onOptionSelected(selectOption: SelectOption) {
    this.onSelect.emit(selectOption);
  }
}
