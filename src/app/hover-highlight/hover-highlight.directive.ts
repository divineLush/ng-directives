import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
class HoverHighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover(event: Event) {
    const nativeElement = this.elementRef.nativeElement;
    this.renderer.setStyle(nativeElement, 'background-color', 'orangered');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    const nativeElement = this.elementRef.nativeElement;
    this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
  }
}

export default HoverHighlightDirective;
