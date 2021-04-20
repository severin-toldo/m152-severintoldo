import { Component, OnInit } from '@angular/core';
import {RoutesService} from "../../service/routes.service";

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.scss']
})
export class SitemapComponent implements OnInit {

  constructor(public routesService: RoutesService) {
  }

  public ngOnInit(): void {
  }

}
