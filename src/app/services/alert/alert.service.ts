import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert } from './models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertSubject = new Subject<Alert>();

  public callAlert(alert: Alert) {
    this.alertSubject.next(alert);
  }
}
