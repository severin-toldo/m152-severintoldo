import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-formats-video',
  templateUrl: './file-formats-video.component.html',
  styleUrls: ['./file-formats-video.component.scss']
})
export class FileFormatsVideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public handleError(): void {
    console.log('hello');
  }

}
