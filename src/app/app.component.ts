import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public chatBotVisible = false;

  constructor(private titleService: Title) {
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Severin-Toldo GmbH');
  }

  public openChatBot() {
    this.chatBotVisible = true;
  }

  public closeChatBot() {
    this.chatBotVisible = false;
  }

}
