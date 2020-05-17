import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent {
  @Input() public totalItems = 1;
  @Input() public pageSize = 25;
  @Input() public currentPage = 1;
  @Input() public step = 2;
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();

  public get totalPages() {
    return Math.ceil((this.totalItems || 1) / (this.pageSize || 1));
  }

  public get isFirstPage() {
    return this.currentPage === 1;
  }

  public get isLastPage() {
    return this.currentPage === this.totalPages;
  }

  public get isPreviousDisabled() {
    return this.currentPage - this.step < 1;
  }

  public get isNextDisabled() {
    return this.currentPage + this.step > this.totalPages;
  }

  public get pages() {
    const result = [];

    if (this.currentPage > 1) {
      result.push(this.currentPage - 1);
    }

    result.push(this.currentPage);

    if (this.currentPage < this.totalPages) {
      result.push(this.currentPage + 1);
    }

    if (this.currentPage + 1 < this.totalPages) {
      result.push(this.currentPage + 2);
    }

    if (this.currentPage + 2 < this.totalPages && this.currentPage === 1) {
      result.push(this.currentPage + 3);
    }

    return result;
  }

  public setPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(page);
  }
}
