import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent {
  @Input() public creditCardNumber = '';
  private readonly = false;
  public get isReadonly() {
    return this.readonly;
  }
  @Input() public set isReadonly(value: boolean) {
    this.creditCardNumber = value ? this.formatReadonlyCCNum(this.creditCardNumber) : this.creditCardNumber;
    this.readonly = value;
  }

  private formatReadonlyCCNum(ccNum: string): string {
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return part;
      }

      return 'xxxx';
    });

    return onlyLast4Shown.join('-');
  }
}
