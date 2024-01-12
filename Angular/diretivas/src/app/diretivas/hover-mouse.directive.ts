// import {
//   Directive,
//   ElementRef,
//   Renderer2,
//   HostListener,
//   HostBinding,
// } from '@angular/core';
//
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverMouse]',
  standalone: true,
})
export class HoverMouseDirective {
  // constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {}
  constructor() {}
  // this._renderer2.setStyle(è passado 3 parâmetros/ 1º - elemento, 2º - propriedade, 3º - valor)
  @HostListener('mouseenter') hoverMouse() {
    this.backgroundColor = 'lightgreen';
  }
  @HostListener('mouseout') mouseOut() {
    this.backgroundColor = 'lightskyblue';
  }
  @HostBinding('style.backgroundColor') backgroundColor!: string;
  // Caso queria executar código extra
  // @HostBinding('style.backgroundColor') get setStyle() {
  //   Código extra...
  //   return this.backgroundColor;
  // }
  // private backgroundColor!: string;
  // Caso queria executar código extra
}
