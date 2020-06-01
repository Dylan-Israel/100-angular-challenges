import { Directive, Input, HostListener, Inject } from '@angular/core';
import { SnackbarService } from '../../services/snackbar/snackbar.service';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {
  @Input() appCopy = '';

  constructor(
    @Inject('Navigator') public navigator: Navigator,
    @Inject('Document') public document: Document,
    public snackbarService: SnackbarService
  ) { }

  @HostListener('click')
  public async copy(): Promise<void> {
    try {
      await this.navigator.clipboard.writeText(this.appCopy);
      this.document.execCommand('copy');
      this.snackbarService.callSnackbar('Copied Successfully.');
    } catch {
      this.snackbarService.callSnackbar('Copied Failed.');
    }
  }
}
