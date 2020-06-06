import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {
  @Input() public width: string;
  @Input() public height: string;

  public get dimensions() {
    const dimensions = {
      width: this.width ? this.width : '100%',
      height: this.height ? this.height : '100%'
    };

    return dimensions;
  }
}
