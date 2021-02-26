import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cookie-warning',
  templateUrl: './cookie-warning.component.html',
  styleUrls: ['./cookie-warning.component.scss']
})
export class CookieWarningComponent implements OnInit {

  @Output() public onClick = new EventEmitter<void>();

  constructor() { }

  public ngOnInit(): void {
  }

  public clickMe(): void {
    this.onClick.emit();
  }

}
