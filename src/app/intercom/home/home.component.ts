import { Component, OnInit } from '@angular/core';
import { contactRoute } from 'src/app/shared/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly contactRoute = contactRoute;


  constructor() {
  }

  public ngOnInit(): void {
  }

}
