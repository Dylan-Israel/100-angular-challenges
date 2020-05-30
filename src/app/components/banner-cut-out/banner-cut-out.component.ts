import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cut-out',
  templateUrl: './banner-cut-out.component.html',
  styleUrls: ['./banner-cut-out.component.scss']
})
export class BannerCutOutComponent {
  @Input() public imageUrl = 'https://images.unsplash.com/photo-1509478074354-0de2c9bb7c8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2173&q=80';
  @Input() public title = '100 Angular Challenge';

}
