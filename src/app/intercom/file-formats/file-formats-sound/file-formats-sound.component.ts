import { Component, OnInit } from '@angular/core';
import {ComparisonCategory} from "../../../model/comparison-category.model";
import {EMPTY_VALUE} from "../../../shared/other.util";

@Component({
  selector: 'app-file-formats-sound',
  templateUrl: './file-formats-sound.component.html',
  styleUrls: ['./file-formats-sound.component.scss']
})
export class FileFormatsSoundComponent implements OnInit {

  public readonly MP3_VIDEO_PATH = "/assets/audio/file-formats/audio.mp3";
  public readonly OGG_VIDEO_PATH = "/assets/audio/file-formats/audio.ogg";
  public readonly WAV_VIDEO_PATH = "/assets/audio/file-formats/audio.wav";

  public readonly MP3_COMPARISON_CATEGORIES = this.getMp3ComparisonCategories();
  public readonly OGG_COMPARISON_CATEGORIES = this.getOggComparisonCategories();
  public readonly WAV_COMPARISON_CATEGORIES = this.getWavComparisonCategories();


  constructor() {
  }

  public ngOnInit(): void {
  }

  private getMp3ComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Moving Picture Experts Group Audio Layer-3'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Freies Format (Keine Lizenz-Abgaben)', 'Portabel', 'Bei der Kompression werden redundanten Informationen nicht gespeichert.', 'Weit verbreitet'];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Verlustbehaftete Kompression', 'Bei der Kompression können Informationen verloren gehen', EMPTY_VALUE, EMPTY_VALUE, EMPTY_VALUE];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Künstler', 'Digitaler Transfer', 'Streaming (z.B. Spotify)', 'Web', EMPTY_VALUE];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Klein (TODO)'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Gut'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.mp3'];

    return [meaning, advantages, disadvantages, usage, size, quality, fileExtension];
  }

  private getOggComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Operation Good Guys'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Freies Format (Keine Lizenz-Abgaben)', 'Unterstützt Kommentar-Header in der Datei', EMPTY_VALUE, EMPTY_VALUE];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Verlustbehaftete Kompression', 'Nicht weit verbreitet', 'Begrenzte Unterstützung durch Tools', EMPTY_VALUE, EMPTY_VALUE];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Künstler', 'Digitaler Transfer', 'Streaming (z.B. Spotify)', 'Videospiele', 'Audio-Bearbeitung'];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Klein (TODO)'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Gut'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.ogg, *.ogm, *.ogx, *.ogv, *.opus, *.spx, *.oga'];

    return [meaning, advantages, disadvantages, usage, size, quality, fileExtension];
  }

  private getWavComparisonCategories(): ComparisonCategory[] {
    const meaning = new ComparisonCategory();
    meaning.title = 'Bedeutung';
    meaning.items = ['Waveform Audio File Format'];

    const advantages = new ComparisonCategory();
    advantages.title = 'Vorteile';
    advantages.items = ['Verlustfreihe Kompression', 'Einfaches verarbeiten und bearbeiten', EMPTY_VALUE, EMPTY_VALUE];

    const disadvantages = new ComparisonCategory();
    disadvantages.title = 'Nachteile';
    disadvantages.items = ['Nicht weit verbreitet', 'Begrenzte Unterstützung durch Tools', 'Ungeeignet für Streaming', 'Ungeeignet fürs Web', 'Begrenzte Portabilität'];

    const usage = new ComparisonCategory();
    usage.title = 'Verwendung';
    usage.items = ['Qualitativ hochwertige Audio-Aufnahmen', 'Qualitativ hochwertige Audio-Bearbeitung', 'TV', 'Radio', 'DVD'];

    const size = new ComparisonCategory();
    size.title = 'Grösse';
    size.items = ['Gross (TODO)'];

    const quality = new ComparisonCategory();
    quality.title = 'Qualität';
    quality.items = ['Hoch'];

    const fileExtension = new ComparisonCategory();
    fileExtension.title = 'Dateiendungen';
    fileExtension.items = ['*.wav, *.wave'];

    return [meaning, advantages, disadvantages, usage, size, quality, fileExtension];
  }

}
