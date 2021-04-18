import { Component, OnInit } from '@angular/core';
import {ComparisonCategory} from "../../../model/comparison-category.model";
import {EMPTY_VALUE} from "../../../shared/other.util";

@Component({
  selector: 'app-style-guide-dos-donts',
  templateUrl: './style-guide-dos-donts.component.html',
  styleUrls: ['./style-guide-dos-donts.component.scss']
})
export class StyleGuideDosDontsComponent implements OnInit {

  public readonly DOS_COMPARISON_CATEGORIES = this.getDosComparisonCategories();
  public readonly DONTS_COMPARISON_CATEGORIES = this.getDontsComparisonCategories();


  constructor() {
  }

  public ngOnInit(): void {
  }

  private getDosComparisonCategories(): ComparisonCategory[] {
    const companyName = new ComparisonCategory();
    companyName.title = 'Firmenname';
    companyName.items = ['Severin-Toldo GmbH', EMPTY_VALUE, EMPTY_VALUE, EMPTY_VALUE, EMPTY_VALUE, EMPTY_VALUE];

    const images = new ComparisonCategory();
    images.title = 'Bilder';
    images.items = ['Positive Bilder', 'Neutrale Bilder', 'Tier Bilder'];

    const colorCombinations = new ComparisonCategory();
    colorCombinations.title = 'Farbkombinationen';
    colorCombinations.items = ['«Primary» / «White»', '«Secondary» / «White»'];

    const words = new ComparisonCategory();
    words.title = 'Tonalität und Wording';
    words.items = ['preiswert', 'kompetent / professionell', 'Webseite', 'Webauftritt', 'Sie'];

    return [companyName, images, colorCombinations, words];
  }

  private getDontsComparisonCategories(): ComparisonCategory[] {
    const companyName = new ComparisonCategory();
    companyName.title = 'Firmenname';
    companyName.items = ['Severin Toldo GmbH', 'SeverinToldo GmbH', 'Severin-Toldo-GmbH', 'Severin-Toldo GMBH', 'Severin-Toldo GmBH', 'Severin-Toldo GmBh'];

    const images = new ComparisonCategory();
    images.title = 'Bilder';
    images.items = ['Bilder von Unordnung, Chaos, Krieg usw.', EMPTY_VALUE, EMPTY_VALUE];

    const colorCombinations = new ComparisonCategory();
    colorCombinations.title = 'Farbkombinationen';
    colorCombinations.items = ['«Primary» / «Success»', '«Success» / «Secondary»'];

    const words = new ComparisonCategory();
    words.title = 'Tonalität und Wording';
    words.items = ['billig', 'gut', 'Website', 'Homepage', 'Du'];

    return [companyName, images, colorCombinations, words];
  }

}
