import { Component, OnInit } from '@angular/core';
import {ComparisonCategory} from "../../../model/comparison-category.model";
import {EMPTY_VALUE} from "../../../shared/other.util";

@Component({
  selector: 'app-style-guide-wording-content',
  templateUrl: './style-guide-wording-content.component.html',
  styleUrls: ['./style-guide-wording-content.component.scss']
})
export class StyleGuideWordingContentComponent implements OnInit {

  public readonly DOS_COMPARISON_CATEGORIES = this.getDosComparisonCategories();
  public readonly DONTS_COMPARISON_CATEGORIES = this.getDontsComparisonCategories();
  public readonly CONTENT_BODY = this.getContentBody();


  constructor() {
  }

  public ngOnInit(): void {
  }

  private getDosComparisonCategories(): ComparisonCategory[] {
    const companyName = new ComparisonCategory();
    companyName.title = 'Firmenname';
    companyName.items = ['Severin-Toldo GmbH', EMPTY_VALUE, EMPTY_VALUE, EMPTY_VALUE, EMPTY_VALUE, EMPTY_VALUE];

    const words = new ComparisonCategory();
    words.title = 'Tonalität und Wording';
    words.items = ['preiswert', 'kompetent / professionell', 'Webseite', 'Webauftritt', 'Sie'];

    return [companyName, words];
  }

  private getDontsComparisonCategories(): ComparisonCategory[] {
    const companyName = new ComparisonCategory();
    companyName.title = 'Firmenname';
    companyName.items = ['Severin Toldo GmbH', 'SeverinToldo GmbH', 'Severin-Toldo-GmbH', 'Severin-Toldo GMBH', 'Severin-Toldo GmBH', 'Severin-Toldo GmBh'];

    const words = new ComparisonCategory();
    words.title = 'Tonalität und Wording';
    words.items = ['billig', 'gut', 'Website', 'Homepage', 'Du'];

    return [companyName, words];
  }

  private getContentBody(): string {
    return 'Die Webseite soll mit häufig gebrauchten Web-Komponenten populiert werden, welche potenzielle Kunden direkt ausprobieren können. Es sollen dafür sowohl grafische, textuelle als auch multimediale Elemente verwendet werden. Dabei soll darauf geachtet werden, stets ein professionelles und modernes Ambiente zu wahren (= Gestaltungsprinzipien).';
  }

}
