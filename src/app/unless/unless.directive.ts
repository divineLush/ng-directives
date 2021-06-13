import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
class UnlessDirective {
  // regular setter
  // gets called every time the "condition" property changes
  // directive name and propery name gotta be same
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // create view(passed template) inside container
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  // everything will be transforemed to <ng-template> in the end
  // so we get templateRef here
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {}
}

export default UnlessDirective;
