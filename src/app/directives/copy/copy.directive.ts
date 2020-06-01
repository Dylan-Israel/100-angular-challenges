import { Directive, HostListener, Input, Inject } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {
  @Input() public appCopy = '';

  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document
  ) { }

  @HostListener('click')
  public async copy() {
    try {
      await navigator.clipboard.writeText(this.appCopy);
      document.execCommand('copy');
    } catch {
      console.log('Failed.');
    }
  }
}
