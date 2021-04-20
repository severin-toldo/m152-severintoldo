import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChatMessage} from "../../../model/chat-message.model";
import {RoutesService} from "../../../service/routes.service";
import {isBlankOrEmpty} from "../../../shared/other.util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})
export class ChatBotComponent implements OnInit {

  public form: FormGroup;
  public messages: ChatMessage[] = [];
  public validCommands = ['SEITEN'];
  public wasSuccessful = false;


  @Output() public onClose = new EventEmitter<void>();


  constructor(private fb: FormBuilder,
              private routesService: RoutesService,
              private router: Router) {
  }

  public ngOnInit(): void {
    this.form = this.fb.group({
      message: ['', [Validators.required]],
    });

    this.addBotMessage('Willkommen! Wie kann ich Ihnen helfen?');
  }

  public sendMessage(): void {
    const message = this.form.value.message;
    this.addUserMessage(message);
    this.form.reset();

    if (message.toUpperCase() === 'ABBRECHEN') {
      this.wasSuccessful = false;
      this.addBotMessage('Willkommen! Wie kann ich Ihnen helfen?');
    } else {
      if (this.wasSuccessful) {
        this.routesService.getRouterLinkByRouteName(message)
          .subscribe(res => {
            if (isBlankOrEmpty(res)) {
              this.addBotMessage('Diese Seite existiert nicht. Bitte versuchen sie es erneut.');
            } else {
              this.addBotMessage('Ich werde Sie nun zu dieser Seite weiterleiten.');
              this.close();
              window.scrollTo(0, 0);
              this.router.navigate([res]);
            }
          });
      } else {
        if (this.validCommands.includes(message.toUpperCase())) {
          this.addBotMessage('Alles klar! Bitte geben Sie nun den gesuchten Seiten-Namen ein.');
          this.wasSuccessful = true;
        } else {
          this.addBotMessage('Das habe ich leider nicht verstanden. Bitte versuchen sie es erneut.');
        }
      }
    }
  }

  public close(): void {
    this.onClose.emit();
  }

  private addBotMessage(message: string): void {
    const msg = new ChatMessage();
    msg.alignment = 'left';
    msg.avatarName = 'twitch';
    msg.date = new Date();
    msg.message = message;

    setTimeout(() => {
      this.addMessage(msg);
    }, 1000);
  }

  private addUserMessage(message: string): void {
    const msg = new ChatMessage();
    msg.alignment = 'right';
    msg.avatarName = 'user';
    msg.date = new Date();
    msg.message = message;

    this.addMessage(msg);
  }

  // TODO scroll to bottom
  private addMessage(msg: ChatMessage): void {
    this.messages.push(msg);
  }

}
