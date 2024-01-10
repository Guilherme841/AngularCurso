import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorBlue]',
  standalone: true,
})
export class ColorBlueDirective {
  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    this._renderer2.setStyle(this._elementRef.nativeElement, 'color', 'blue');
  }
}
