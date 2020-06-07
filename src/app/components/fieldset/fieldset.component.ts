import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.scss']
})
export class FieldsetComponent {
  @Input() public legend = '';
  @Input() public isOpen = true;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
