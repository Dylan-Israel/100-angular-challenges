import { Pipe, PipeTransform } from '@angular/core';
import { htmlRegex } from 'src/app/components/rich-text-viewer/html-regex.data';

@Pipe({
  name: 'richText'
})
export class RichTextPipe implements PipeTransform {

  public transform(value: string): string {
    const html = this.parseNonEmptyHtml(value);
    const isValidHtml = htmlRegex.test(html);

    return isValidHtml ? html : '';
  }

  private parseNonEmptyHtml(html: string) {
    const htmlTags: RegExp = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }

}
