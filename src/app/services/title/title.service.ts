import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(public titleService: Title, public router: Router, public activatedRoute: ActivatedRoute) {

  }

  public initializeTitleService(): void {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
    )
      .subscribe(() => {
        const { data } = this.activatedRoute.root.firstChild.snapshot;
        const mainTitle = '100 Angular Challenge';

        if (data) {
          let { title } = data;
          title = title ? `${mainTitle} - ${title}` : mainTitle;
          this.titleService.setTitle(title);
        } else {
          this.titleService.setTitle(mainTitle);
        }
      });
  }
}
