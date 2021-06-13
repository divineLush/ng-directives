import { Directive, ElementRef, HostBinding, HostListener, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDynamicHover]'
})
class DynamicHoverHighlightDirective {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'deepskyblue';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  }
}

export default DynamicHoverHighlightDirective;
