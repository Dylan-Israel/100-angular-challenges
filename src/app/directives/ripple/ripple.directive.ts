import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRipple]'
})
export class RippleDirective {
  @Input() public appRipple = 'ripple';

  constructor(public element: ElementRef, public renderer: Renderer2) { }

  @HostListener('mouseenter') onHover() {
    this.renderer.addClass(this.element.nativeElement, this.appRipple);
  }
}
