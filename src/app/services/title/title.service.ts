import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(public titleService: Title, public router: Router, public activatedRoute: ActivatedRoute) { }

  public initializeTitleService(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
    )
      .subscribe(() => {
        const { data } = this.activatedRoute.root.firstChild.snapshot;
        const mainTitle = '100 Angular Challenge';
        const lastTitle = this.titleService.getTitle();

        if (data) {
          const title = data.title ? `${mainTitle} - ${data.title}` : mainTitle;

          if (lastTitle !== title) {
            this.titleService.setTitle(title);
          }
        } else {
          if (lastTitle !== mainTitle) {
            this.titleService.setTitle(mainTitle);
          }
        }
      });
  }
}
