import {Component, HostListener, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public chatBotVisible = false;
  public isMobile = false;


  constructor(private titleService: Title) {
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.setIsMobile();
  }

  public ngOnInit(): void {
    this.titleService.setTitle('Severin-Toldo GmbH');
    this.setIsMobile();
  }

  public openChatBot() {
    this.chatBotVisible = true;
  }

  public closeChatBot() {
    this.chatBotVisible = false;
  }

  private setIsMobile(): void {
    this.isMobile = window.innerWidth <= 576;
    console.log(this.isMobile);
  }

}
