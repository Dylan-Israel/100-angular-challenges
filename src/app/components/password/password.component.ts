import { Component } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  public value = 0;

  private currentPassword = '';
  public set password(value: string) {
    this.currentPassword = value;
    this.updatePasswordValue(this.currentPassword);
  }

  public get password(): string {
    return this.currentPassword;
  }

  private updatePasswordValue(value: string) {
    let count = 0;

    if (value.length >= 8) {
      count += 25;
    }

    if (/(.*[A-Z].*)/.test(value)) {
      count += 25;
    }

    if (/(.*\d.*)/.test(value)) {
      count += 25;
    }

    if (/\W|_/g.test(value)) {
      count += 25;
    }

    this.value = count;
  }
}
