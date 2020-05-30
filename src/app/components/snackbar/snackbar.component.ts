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
  public isActive = false;

  public show() {
    this.isActive = true;

    const obs = of(null).pipe(delay(2900)).subscribe({
      complete: () => {
        this.isActive = false;
        obs.unsubscribe();
      }
    });
  }

}
