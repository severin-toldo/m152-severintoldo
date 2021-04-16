import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Alert} from "../../../model/alert.model";

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  @Input() public src: string;


  @Output() public onAudioLoaded = new EventEmitter<void>();

  @ViewChild('audioPlayer') public audioPlayer: ElementRef<HTMLAudioElement>;

  public alert: Alert;
  public isPlaying = false;


  constructor() {
  }

  public ngOnInit(): void {
  }

  public playAudio(): void {
    if (this.isPlaying) {
      this.audioPlayer.nativeElement.pause();
    } else {
      this.audioPlayer.nativeElement.play();
    }

    this.isPlaying = !this.isPlaying;
  }

  public onError() {
    this.alert = new Alert();
    this.alert.title = 'COMPONENTS.SOUND_PLAYER.UNSUPPORTED_FORMAT_ALERT_TITLE';
    this.alert.body = 'COMPONENTS.SOUND_PLAYER.UNSUPPORTED_FORMAT_ALERT_BODY';
  }

  public onDataLoaded() {
    this.onAudioLoaded.emit();
  }

}
