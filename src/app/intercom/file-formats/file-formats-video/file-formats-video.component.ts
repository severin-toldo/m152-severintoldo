import { Component, OnInit } from '@angular/core';
import {ComparisonCategory} from "../../../model/comparison-category.model";
import {EMPTY_VALUE} from "../../../shared/other.util";

@Component({
  selector: 'app-file-formats-video',
  templateUrl: './file-formats-video.component.html',
  styleUrls: ['./file-formats-video.component.scss']
})
export class FileFormatsVideoComponent implements OnInit {

  public readonly THUMBNAIL_PATH = '/assets/images/thumbnails/video-thumbnail.png';

  public readonly MP4_VIDEO_PATH = "/assets/videos/movie.mp4";
  public readonly MKV_VIDEO_PATH = "/assets/videos/movie.mkv";
  public readonly MOV_VIDEO_PATH = "/assets/videos/movie.mov";
  public readonly WEBM_VIDEO_PATH = "/assets/videos/movie.webm";

  public readonly MP4_COMPARISON_CATEGORIES = this.getMp4ComparisonCategories();
  public readonly MKV_COMPARISON_CATEGORIES = this.getMkvComparisonCategories();
  public readonly MOV_COMPARISON_CATEGORIES = this.getMovComparisonCategories();
  public readonly WEBM_COMPARISON_CATEGORIES = this.getWebmComparisonCategories();


  constructor() {
  }

  public ngOnInit(): void {
  }

  public getMp4ComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Moving Pictures Experts Group'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Hohe Videoqualität', 'Videokompression ohne erkennbaren Qualitätsverlust', 'Unterstützt Interaktive Menüs', 'Sehr flexibel', 'Webstandard', EMPTY_VALUE];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Intensive Rechenleistung bei Kodierung und Dekodierung', 'Ungeeignet für Streaming', 'Unterstützt Kapitel nur begrenzt', EMPTY_VALUE];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Web', 'Endgeräte mit geringer rechen Leistung (z.B. Smartphones)'];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Klein (24.5 MB)'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Hoch'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.mp4, *.m4v, *.f4v'];

    return [meaning, advantages, disadvantages, usage, size, quality, fileExtension];
  }

  public getMkvComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Matroska'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Hohe Videoqualität', 'Hohe Kompression', 'Unterstützt Interaktive Menüs', 'Unterstützt Kapitel', 'Unterstützt Streaming', 'Flexibel'];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Kein Standardformat', 'Nicht weitverbreitet', 'Wenige Programme zur Bearbeitung vorhanden', 'Wird im Web nicht von allen Browsern unterstütz'];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Nicht professionell (Privatgebrauch)', EMPTY_VALUE];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Klein (24.4 KB)'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Hoch'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.mkv, *.mk'];

    return [meaning, advantages, disadvantages, usage, size, quality, fileExtension];
  }

  public getMovComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Movie / Quicktime'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Hohe Videoqualität', 'Kleine Dateigrösse', 'Unterstützt Interaktive Menüs', 'Unterstützt Kapitel', 'Unterstützt Streaming', 'Standard für professionellen Videoschnitt'];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Rechenintensiv', 'Nur auf wenigen Endgeräten abspielbar', EMPTY_VALUE, EMPTY_VALUE];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Professioneller Bereich', EMPTY_VALUE];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Klein (24.5 MB)'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Hoch'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.mov, *.qt'];

    return [meaning, advantages, disadvantages, usage, size, quality, fileExtension];
  }

  public getWebmComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Operation Good Guys'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Gute Videoqualität', 'Geringe Dateigrösse', 'Unterstützt Kapitel', 'Schont den Prozessor', 'Speziell zur Nutzung im Web entwickelt', EMPTY_VALUE];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Unterstützt keine Interaktive Menüs', 'Streaming nur mit MPEG-DASH unterstützt', EMPTY_VALUE, EMPTY_VALUE];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Web', EMPTY_VALUE];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Gering (11.9 MB)'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Gut'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.webm'];

    return [meaning, advantages, disadvantages, usage, size, quality, fileExtension];
  }

}
