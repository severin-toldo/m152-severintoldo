import { Component, OnInit } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ComparisonCategory} from "../../../model/comparison-category.model";
import {ImageViewerImage} from "../../../model/image-viewer-image.model";
import {Column} from "../../../model/column.model";
import {EMPTY_VALUE} from "../../../shared/other.util";


@Component({
  selector: 'app-style-guide-controls',
  templateUrl: './style-guide-controls.component.html',
  styleUrls: ['./style-guide-controls.component.scss']
})
export class StyleGuideControlsComponent implements OnInit {

  public readonly COMPARISON_CATEGORIES = this.getComparisonCategories();
  public readonly IMAGES = this.getImages();
  public readonly VIDEO_PATH = '/assets/videos/file-formats/movie.mp4';
  public readonly VIDEO_THUMBNAIL_PATH = '/assets/images/thumbnails/video_thumbnail.png';
  public readonly AUDIO_PATH = "/assets/audio/file-formats/audio.mp3";

  public columns: Column[] = [
    {
      title: 'Vorname',
      name: 'firstname'
    },
    {
      title: 'Nachname',
      name: 'lastname'
    },
    {
      title: 'E-Mail',
      name: 'email'
    },
    {
      title: 'PLZ',
      name: 'zip'
    },
    {
      title: 'Ort',
      name: 'place'
    },
  ];

  public rows = [
    {
      firstname: 'Anna',
      lastname: 'Meier',
      email: 'anna@meier.ch',
      zip: '4321',
      place: 'Baum',
    },
    {
      firstname: 'Hans',
      lastname: 'Müller',
      email: 'hans@müller.com',
      zip: '5873',
      place: 'Zürich',
    },
    {
      firstname: 'Max',
      lastname: 'Mustermann',
      email: 'max@mustermann.com',
      zip: '1234',
      place: 'Ort',
    },{
      firstname: 'Jakob',
      lastname: 'Schmied',
      email: 'Jakob123@schmied.ch',
      zip: '9373',
      place: 'Luzern',
    },
    {
      firstname: 'Manuela',
      lastname: 'Mustermann',
      email: 'manu@muster.com',
      zip: '6918',
      place: 'Basel',
    }
  ];


  constructor(private toastr: ToastrService) {
  }

  public ngOnInit(): void {
  }

  public popSuccessToaster(): void {
    this.toastr.success('This is a success toaster!', 'Success!');
  }

  public popWarnToaster(): void {
    this.toastr.warning('This is a warn toaster!', 'Warn!');
  }

  public popDangerToaster(): void {
    this.toastr.error('This is a danger toaster!', 'Danger!');
  }

  private getComparisonCategories(): ComparisonCategory[] {
    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Vorteil 1', 'Vorteil 2', 'Vorteil 3'];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Nachteil 1', 'Nachteil 2', 'Nachteil 3'];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Verwendung 1'];

    return [advantages, disadvantages, usage];
  }

  private getImages(): ImageViewerImage[] {
    const detail = new ImageViewerImage();
    detail.title = 'Bild 1 - Viele Details';
    detail.src = '/assets/images/file-formats/detail.jpg';
    detail.thumbnail = '/assets/images/thumbnails/detail_thumbnail.jpg';

    const lowDetail = new ImageViewerImage();
    lowDetail.title = 'Bild 2 - Wenige Details';
    lowDetail.src = '/assets/images/file-formats/low_detail.jpg';
    lowDetail.thumbnail = '/assets/images/thumbnails/low_detail_thumbnail.jpg';

    return [detail, lowDetail];
  }


}
