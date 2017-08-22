import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appAutoGrow]'
})
export class AutoGrowDirective {

  constructor(private el: ElementRef) {

  }

  @HostListener('focus') onFocus() {
    this.el.nativeElement.style.width = '200';
  }

  @HostListener('blur') onBlur() {
    this.el.nativeElement.style.width = '50';
  }
}
