import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScale]'
})
export class ScaleDirective {

  constructor(public element: ElementRef) { }

  @HostListener('mouseover')
  public mouseover(): void {
    this.element.nativeElement.style.transition = 'all .3s';
    this.element.nativeElement.style.transform = 'scale(1.25)';
  }

  @HostListener('mouseout')
  public mouseout(): void {
    this.element.nativeElement.style.transform = 'scale(1.0)';
  }
}
