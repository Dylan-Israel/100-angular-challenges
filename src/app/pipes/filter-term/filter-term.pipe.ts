import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilterTerm'
})
export class FilterTermPipe implements PipeTransform {

  public transform(items: string[], searchTerm: string = ''): string[] {
    return items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
