import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // unique selector
  // attribute CSS selector in this case
  selector: '[appBasicHighlight]',
})
class BasicHighlightDirective implements OnInit {
  // using a ts shortcut
  // now elementRef is a property of this class
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // not a good practice to directly access elements
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}

export default BasicHighlightDirective;
