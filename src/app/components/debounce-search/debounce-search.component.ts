import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.scss']
})
export class DebounceSearchComponent {
  @Input() public placeHolder = '';
  @Output() public searchUpdate = new EventEmitter<string>();
  public searchTerm = '';
  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$.pipe(
      debounceTime(250),
      distinctUntilChanged()
    )
      .subscribe(value => {
        this.searchUpdate.emit(value);
      });
  }

  public updateSearchTerm(term: string) {
    this.searchUpdate$.next(term);
  }
}
