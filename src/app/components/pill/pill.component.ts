import { Component, Input } from '@angular/core';
import { PillType } from './pill-type.enum';

@Component({
  selector: 'app-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent {
  @Input() public type = PillType.Info;
  @Input() public label = '';
  @Input() public iconClasses = '';
}
