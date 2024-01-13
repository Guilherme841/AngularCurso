import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // Posso passar parâmetro global de elemento no seletor.
  selector: '[appColorBlue]',
  standalone: true,
})
export class ColorBlueDirective {
  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    // Melhor pratica:
    this._renderer2.setStyle(this._elementRef.nativeElement, 'color', 'blue');
  } 
}
