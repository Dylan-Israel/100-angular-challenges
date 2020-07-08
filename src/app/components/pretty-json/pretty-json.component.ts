import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pretty-json',
  templateUrl: './pretty-json.component.html',
  styleUrls: ['./pretty-json.component.scss']
})
export class PrettyJsonComponent {
  @Input() public code: { [key: string]: any };
}
