import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent {
  @Input() public tableData: any[] = [
    { first: 'Dylan 1', last: 'Israel', dob: '10/25/87' },
    { first: 'Dylan 2', last: 'Israel', dob: '10/25/87' },
    { first: 'Dylan 3', last: 'Israel', dob: '10/25/87' },
    { first: 'Dylan 4', last: 'Israel', dob: '10/25/87' },
  ];

  @Output() public headerSelected = new EventEmitter<{ key: string, value: any }>();

  public headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ value, key });
  }
}
