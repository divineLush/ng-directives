import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHover]'
})
class BetterHoverHighlightDirective {
  // pass a string defining to which property of the host element we want to bind
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = 'darkseagreen';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'transparent';
  }
}

export default BetterHoverHighlightDirective;
