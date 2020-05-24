import { Component, Input } from '@angular/core';
import { isDate } from 'util';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrls: ['./sort-table.component.scss']
})
export class SortTableComponent {
  @Input() public tableData: any[] = [
    { first: 'Dylan 1', dob: '10/25/88', age: 32, living: true },
    { first: 'Dylan 2', dob: '10/25/90', age: 31, living: true },
    { first: 'Dylan 3', dob: '10/25/95', age: 20, living: false },
    { first: 'Dylan 4', dob: '10/25/87', age: 35, living: true },
  ];
  public sortDirection = true;

  public sort(headerData: { key: string, value: any }): void {
    const { key, value } = headerData;
    this.sortDirection = !this.sortDirection;

    switch (true) {
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;
      case typeof value === 'number':
        this.sortNumber(key);
        break;
      case this.isDate(value):
        this.sortDate(key);
        break;
      case typeof value === 'string':
        this.sortString(key);
        break;
    }
  }

  private isDate(value: any): boolean {
    const parsedDate = Date.parse(value);

    return isNaN(value) && !isNaN(parsedDate);
  }

  private sortDate(key: any): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return new Date(value1[key]).getTime() - new Date(value2[key]).getTime();
      } else {
        return new Date(value2[key]).getTime() - new Date(value1[key]).getTime();
      }
    });
  }

  private sortBoolean(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }

  private sortNumber(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key]);
      }
    });
  }

  private sortString(key: string): void {
    this.tableData.sort((value1: string, value2: string) => {
      const value1UpperCased = value1[key].toUpperCase();
      const value2UpperCased = value2[key].toUpperCase();

      if (this.sortDirection) {
        if (value1UpperCased > value2UpperCased) {
          return -1;
        }

        if (value2UpperCased > value1UpperCased) {
          return 1;
        }

        return 0;
      } else {
        if (value2UpperCased > value1UpperCased) {
          return -1;
        }

        if (value1UpperCased > value2UpperCased) {
          return 1;
        }

        return 0;
      }
    });
  }
}
