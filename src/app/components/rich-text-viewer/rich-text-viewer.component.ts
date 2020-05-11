import { Component, Input } from '@angular/core';
import { htmlRegex } from './html-regex.data';

@Component({
  selector: 'app-rich-text-viewer',
  templateUrl: './rich-text-viewer.component.html',
  styleUrls: ['./rich-text-viewer.component.scss']
})
export class RichTextViewerComponent {
  public validHtml = '';

  @Input() set htmlText(value: string) {
    const html = this.parseNonEmptyHtml(value);
    const isValidHtml = htmlRegex.test(html);
    this.validHtml = isValidHtml ? html : '';
  }

  private parseNonEmptyHtml(html: string = '') {
    const htmlTags: RegExp = /<[^]*?>/g;
    const hasContent = html.replace(htmlTags, '').trim().length > 0;

    return hasContent ? html : '';
  }
}
