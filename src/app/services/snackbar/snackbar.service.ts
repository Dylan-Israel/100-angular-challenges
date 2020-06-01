import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  public snackbar$ = new Subject<string>();

  public callSnackBar(message: string): void {
    this.snackbar$.next(message);
  }
}
