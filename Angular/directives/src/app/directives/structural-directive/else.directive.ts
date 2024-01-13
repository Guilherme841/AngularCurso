import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appElse]',
  standalone: true,
})
export class ElseDirective {
  // Método set do typescript
  // Input property para expor o método
  @Input() set appElse(condition: boolean) {
    if (!condition) {
      this._ViewContainerRef.createEmbeddedView(this._TemplateRef);
    } else {
      this._ViewContainerRef.clear();
    }
  }
  constructor(
    private _TemplateRef: TemplateRef<any>,
    private _ViewContainerRef: ViewContainerRef
  ) {}
}
