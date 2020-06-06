import { Directive, HostBinding, Input, ElementRef, AfterViewInit, Inject, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[appLazyLoadImage]'
})
export class LazyLoadImageDirective implements AfterViewInit, OnDestroy {
  @HostBinding('attr.src') srcAttribute = null;
  @Input() src: string;
  public observer: IntersectionObserver;

  constructor(private element: ElementRef, @Inject('Window') public window: Window) { }

  public ngAfterViewInit(): void {
    console.log(this.canLazyLoad());
    if (this.canLazyLoad()) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(({ isIntersecting }) => {
          console.log(isIntersecting);
          if (isIntersecting) {
            this.loadImage();
            this.observer.unobserve(this.element.nativeElement);
          }
        });
      });

      this.observer.observe(this.element.nativeElement);
    } else {
      this.loadImage();
    }
  }

  private loadImage(): void {
    this.srcAttribute = this.src;
  }

  private canLazyLoad(): boolean {

    return this.window && this.window.hasOwnProperty('IntersectionObserver');
  }

  public ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
