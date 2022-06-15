import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[parentDirect]',
})
export class ParentDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'Red';
  }
  private backgroundColor = (background: string, color: string) => {
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.backgroundColor = background;
  };
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor('Red', 'white');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor('white', 'Red');
  }
}
