import { Component, Input } from '@angular/core';
import { RibbonLocation } from './ribbon-location.enum';
import { RibbonType } from './ribbon-type';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent {
  @Input() public content = '';
  @Input() public location: RibbonLocation = RibbonLocation.TopRight;
  @Input() public type: RibbonType = RibbonType.Info;
}
