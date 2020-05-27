import { Component, Input } from '@angular/core';
import { RibbonType } from './ribbon-type';
import { RibbonLocation } from './ribbon-location.enum';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent {
  @Input() public content = '';
  @Input() public location: RibbonLocation = RibbonLocation.BottomLeft;
  @Input() public type: RibbonType = RibbonType.Success;
}
