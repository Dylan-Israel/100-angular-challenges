import { Component, Input } from '@angular/core';
import { SocialMediaIcon } from './models/social-media-icon.interface';
import { SocialMedia } from './models/social-media.enum';

@Component({
  selector: 'app-social-media-bar',
  templateUrl: './social-media-bar.component.html',
  styleUrls: ['./social-media-bar.component.scss']
})
export class SocialMediaBarComponent {
  @Input() public socialMedia: SocialMediaIcon[] = [];
  public SocialMedia = SocialMedia;
}
