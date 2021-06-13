import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
class BetterHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const nativeElement = this.elementRef.nativeElement;
    // renderer is a better approach for accessing the DOM
    // cause sometimes u dont have direct access to the DOM
    this.renderer.setStyle(nativeElement, 'background-color', 'cyan');
  }
}

export default BetterHighlightDirective;
