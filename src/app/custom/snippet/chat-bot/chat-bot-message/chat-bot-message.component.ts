import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from "../../../../model/chat-message.model";

@Component({
  selector: 'app-chat-bot-message',
  templateUrl: './chat-bot-message.component.html',
  styleUrls: ['./chat-bot-message.component.scss']
})
export class ChatBotMessageComponent implements OnInit {

  @Input() public message: ChatMessage;

  constructor() {
  }

  public ngOnInit(): void {
  }

}
