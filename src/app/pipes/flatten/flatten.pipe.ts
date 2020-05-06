import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFlatten'
})
export class FlattenPipe implements PipeTransform {
  public transform(value: any[]): any[] {

    return this.flattenArray(value);
  }

  public flattenArray(arr: any[]): any[] {
    const result = [];

    arr.forEach(el => {
      if (Array.isArray(el)) {
        result.push(...this.flattenArray(el));
      } else {
        result.push(el);
      }
    });

    return result;
  }
}
