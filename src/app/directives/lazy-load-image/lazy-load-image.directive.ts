import { Directive, HostBinding, Input, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements AfterViewInit, OnDestroy {
  @HostBinding('attr.src') srcAttribute = null;
  @Input() src: string;
  public observer: IntersectionObserver;

  constructor(private el: ElementRef) { }

  public ngAfterViewInit(): void {
    if (this.canLazyLoad()) {
      this.lazyLoadImage();
    } else {
      this.loadImage();
    }
  }

  private canLazyLoad(): boolean {
    return window && window.hasOwnProperty('IntersectionObserver');
  }

  private lazyLoadImage(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          this.observer.unobserve(this.el.nativeElement);
        }
      });
    });
    this.observer.observe(this.el.nativeElement);
  }

  private loadImage() {
    this.srcAttribute = this.src;
  }

  public ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
