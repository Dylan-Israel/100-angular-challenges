import { Directive, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterContentInit {

  constructor(public el: ElementRef<HTMLInputElement>) { }

  public ngAfterContentInit() {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 250);
  }
}
