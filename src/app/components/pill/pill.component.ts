import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PillType } from './pill-type.enum';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent {
  @Input() public type: PillType = PillType.Info;
  @Input() public label = '';
  @Input() public iconClasses = '';
  @Input() public isActive = false;
  @Input() public canBeSelected = false;
  @Output() public selected = new EventEmitter<{ hasBeenSelected: boolean, label: string }>();

  public toggle(): void {
    this.isActive = !this.isActive;
    this.selected.emit({ hasBeenSelected: this.isActive, label: this.label });
  }
}
