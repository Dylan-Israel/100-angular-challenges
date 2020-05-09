import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() public title = '';
  public isHidden = true;

  public close(): void {
    this.isHidden = true;
  }

  public open(): void {
    this.isHidden = false;
  }
}
