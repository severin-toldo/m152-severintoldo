import { Component, OnInit } from '@angular/core';
import {ComparisonCategory} from "../../../model/comparison-category.model";
import {EMPTY_VALUE} from "../../../shared/other.util";

@Component({
  selector: 'app-file-formats-image',
  templateUrl: './file-formats-image.component.html',
  styleUrls: ['./file-formats-image.component.scss']
})
export class FileFormatsImageComponent implements OnInit {

  // TODO add actual sizes  ex. (15MB, 17MB)
  // TODO image viewer

  // public readonly THUMBNAIL_PATH = '/assets/images/thumbnails/video-thumbnail.png';

  public readonly JPEG_VIDEO_PATH = "/assets/videos/movie.mp4";
  public readonly JPEG_LQ_VIDEO_PATH = "/assets/videos/movie.mkv";
  public readonly BMP_VIDEO_PATH = "/assets/videos/movie.mov";
  public readonly PNG_VIDEO_PATH = "/assets/videos/movie.webm";
  public readonly GIF_VIDEO_PATH = "/assets/videos/movie.webm";

  public readonly JPEG_COMPARISON_CATEGORIES = this.getJpegComparisonCategories();
  public readonly JPEG_LQ__COMPARISON_CATEGORIES = this.getJpegLqComparisonCategories();
  public readonly BMP_COMPARISON_CATEGORIES = this.getBmpComparisonCategories();
  public readonly PNG_COMPARISON_CATEGORIES = this.getPngComparisonCategories()
  public readonly GIF_COMPARISON_CATEGORIES = this.getGifComparisonCategories();


  constructor() {
  }

  public ngOnInit(): void {
  }

  private getJpegComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Joint Photographic Experts Group'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Hohe Kompatibilität', 'Weit verbreitet', 'Unterstützt volles Farbenspektrum (16 Mio. Farben)', 'Unterstützt Interlacing'];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Unterstützt keine Ebenen', 'Unterstütz keine Transparenz', 'Unterstütz keine Animationen', 'Verlustbehaftete Kompression'];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Web', 'Kameras', 'Druck'];

    const subFormats = new ComparisonCategory();
    subFormats.title = 'Unterformate';
    subFormats.items = ['Progressive JPEG (Interlacing)'];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Klein (TODO)'];

    const sizeReason = new ComparisonCategory();
    sizeReason.title = 'Grund der Grösse';
    sizeReason.items = ['Da das JPEG Bild unkomprimiert ist, ist die Dateigrösse vergleichsweise gross (Die Bildqualität ist dafür aber Hoch).'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Hoch'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.jpg, *.jpeg'];

    return [meaning, advantages, disadvantages, usage, subFormats, size, sizeReason, quality, fileExtension];
  }

  private getJpegLqComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Joint Photographic Experts Group'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Hohe Kompatibilität', 'Weit verbreitet', 'Unterstützt volles Farbenspektrum (16 Mio. Farben)', 'Unterstützt Interlacing'];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Unterstützt keine Ebenen', 'Unterstütz keine Transparenz', 'Unterstütz keine Animationen', 'Verlustbehaftete Kompression'];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Web', 'Kameras', 'Druck'];

    const subFormats = new ComparisonCategory();
    subFormats.title = 'Unterformate';
    subFormats.items = ['Progressive JPEG (Interlacing)'];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Gering (TODO)'];

    const sizeReason = new ComparisonCategory();
    sizeReason.title = 'Grund der Grösse';
    sizeReason.items = ['Da das JPEG Bild komprimiert ist, ist die Dateigrösse gering (Die Bildqualität ist dafür aber vergleichsweise Schlechter).'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Gut'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.jpg, *.jpeg'];

    return [meaning, advantages, disadvantages, usage, subFormats, size, sizeReason, quality, fileExtension];
  }

  private getBmpComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Windows Bitmap'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Unterstützt volles Farbenspektrum (16 Mio. Farben)', 'Verlustfreihe Kompression', 'Unterstützt Interlacing', 'Wird von Windows native unterstützt', 'Einfach strukturiert'];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Für die meisten Zwecke Ungeeignet', 'Grosse Dateigrösse, auch nach Kompression', 'Unterstütz keine Transparenz'];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Windows OS', 'Photographie (Bilder mit hohem Detailgrad und hoher Qualität)'];

    const subFormats = new ComparisonCategory();
    subFormats.title = 'Unterformate';
    subFormats.items = ['-'];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Gross (TODO)'];

    const sizeReason = new ComparisonCategory();
    sizeReason.title = 'Grund der Grösse';
    sizeReason.items = ['Jeder Pixel wird mit den jeweiligen Farbwerten gespeichert. Das führt zu einer grossen Dateigrösse.'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Hoch'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.bmp, *.dip'];

    return [meaning, advantages, disadvantages, usage, subFormats, size, sizeReason, quality, fileExtension];
  }

  private getPngComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Portable Network Graphics'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Unterstützt volles Farbenspektrum (16 Mio. Farben)', 'Verlustfreihe Kompression', 'Unterstützt Interlacing', 'Unterstützt Transparenz', 'Unterstützt Alpha Kanal'];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Unterstützt keine Animationen', 'Nicht für Druck geeignet'];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Web', 'Digitaler Transfer'];

    const subFormats = new ComparisonCategory();
    subFormats.title = 'Unterformate';
    subFormats.items = ['Adam7 Algorithmus (Interlacing)'];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Gross (TODO)'];

    const sizeReason = new ComparisonCategory();
    sizeReason.title = 'Grund der Grösse';
    sizeReason.items = ['Die grosse Dateigrösse kommt vor allem durch die verlustfreihe Kompression zustande. Im Gegenzug dafür behaltet das Bild seinen Detailgrad und seine Qualität auch nach einer Kompression.'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Hoch'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.png'];

    return [meaning, advantages, disadvantages, usage, subFormats, size, sizeReason, quality, fileExtension];
  }

  private getGifComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Graphics Interchange Format'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Verlustfreihe Kompression', 'Unterstützt Interlacing', 'Unterstützt Animationen', 'Unterstützt Transparenz'];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Unterstütz nur 256 Farben', 'Nicht für Detaillierte Bilder geeignet'];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Web', 'Kleine Grafiken', 'Animationen'];

    const subFormats = new ComparisonCategory();
    subFormats.title = 'Unterformate';
    subFormats.items = ['-'];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Gering (TODO)'];

    const sizeReason = new ComparisonCategory();
    sizeReason.title = 'Grund der Grösse';
    sizeReason.items = ['Das GIF Format unterstützt nur wenige Farben und wenige Details. Auf Grund der mittelwertigen Qualität ist auch die Dateigrösse entsprechend gering.'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Mittel'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.gif'];

    return [meaning, advantages, disadvantages, usage, subFormats, size, sizeReason, quality, fileExtension];
  }

}
