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

  public get is8CharsOrGreater(): boolean {
    return this.currentPassword.length >= 8;
  }

  public get hasOneCapitalLetter(): boolean {
    return /(.*[A-Z].*)/.test(this.currentPassword);
  }

  public get hasANumber(): boolean {
    return /(.*\d.*)/.test(this.currentPassword);
  }

  public get hasASpecialCharacter(): boolean {
    return /\W|_/g.test(this.currentPassword);
  }

  private updatePasswordValue(value: string) {
    let count = 0;

    if (this.is8CharsOrGreater) {
      count += 25;
    }

    if (this.hasOneCapitalLetter) {
      count += 25;
    }

    if (this.hasANumber) {
      count += 25;
    }

    if (this.hasASpecialCharacter) {
      count += 25;
    }

    this.value = count;
  }
}
