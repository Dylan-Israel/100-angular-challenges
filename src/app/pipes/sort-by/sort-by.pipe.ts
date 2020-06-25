import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  public transform(value: string[] | { [fieldName: string]: string }[], order: number = 1, sortKey?: string)
    : string[] | { [fieldName: string]: string }[] {
    if (value === null || value === undefined) {
      return value;
    }

    if (!Array.isArray(value)) {
      throw new Error(`Must be an array.`);
    }

    const direction = order === 1 ? 1 : -1;
    const reverseDirection = order === -1 ? -1 : 1;

    if (!sortKey) {
      return (value as string[]).sort((a, b) => (a > b ? direction : reverseDirection));
    }

    return (value as { [fieldName: string]: string }[]).sort((a, b) => (a[sortKey] > b[sortKey] ? direction : reverseDirection));
  }
}
