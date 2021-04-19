import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public readonly IMAGES_BASE_PATH = '/assets/images/gallery/';
  public images = [];


  constructor() {
  }

  public ngOnInit(): void {
    for (let i = 1; i < 13; i++) {
      this.images.push({
        src: this.IMAGES_BASE_PATH + i + '.jpg',
        caption: 'Bild ' + i
      });
    }
  }

}
