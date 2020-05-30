import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  @Input() public message = '';
  public isShown = false;

  public show(): void {
    this.isShown = true;

    const subscription = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isShown = false;
        subscription.unsubscribe();
      }
    });
  }
}
