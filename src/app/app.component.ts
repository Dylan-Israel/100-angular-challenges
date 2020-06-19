import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public titleService: TitleService) { }

  public ngOnInit() {
    this.titleService.initializeTitleService();
  }
}
