import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {
  @Input() public baseHref = 'https://www.DylanIsrael.com';
  @Input() public hashTags: string[] = ['Dylan Israel', 'JavaScript', 'TypeScript', 'Angular', '100 Angular Challenge'];

  constructor(public titleService: Title) { }

  public get twitterMessage(): string {
    const base = this.getBaseWithHashtagsAndRoute();
    const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`);

    return `${base}${message}`;
  }

  private getBaseWithHashtagsAndRoute(): string {
    const route = encodeURI(this.baseHref);
    const hashtags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashtags)}&related=pizzapokerguy&url=${route}&text=`;
  }
}
