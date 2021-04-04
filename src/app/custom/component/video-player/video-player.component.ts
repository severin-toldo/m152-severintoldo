import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Alert} from "../../../model/alert.model";

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() public src: string;
  @Input() public thumbnail: string;


  @Output() public onVideoLoaded = new EventEmitter<void>();

  public alert: Alert;


  constructor() {
  }

  public ngOnInit(): void {
  }

  public onError() {
    this.alert = new Alert();
    this.alert.title = 'COMPONENTS.VIDEO_PLAYER.UNSUPPORTED_FORMAT_ALERT_TITLE';
    this.alert.body = 'COMPONENTS.VIDEO_PLAYER.UNSUPPORTED_FORMAT_ALERT_BODY';
  }

  public onDataLoaded() {
    this.onVideoLoaded.emit();
  }

}
