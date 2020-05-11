import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {
  public searchTerm = '';
  public hasBeenSelected = false;
  @Input() public items = ['United States', 'Mexico', 'United Arab Emirates'];

  public updateSearchTerm(value: string): void {
    this.searchTerm = value;
    this.hasBeenSelected = false;
  }

  public selectSearchTerm(term: string) {
    this.searchTerm = term;
    this.hasBeenSelected = true;
  }
}
