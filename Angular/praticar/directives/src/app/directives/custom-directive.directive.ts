import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true,
})
export class CustomDirectiveDirective {
  // @Input() backgroundColor!: string;
  @HostBinding('style.background') backgroundColor!: string;
  @HostListener('click')
  clickedDirective() {
    this.backgroundColor = 'lightskyblue'
    alert('Diretiva Customizada Funcionando!');
  }
  constructor() {}
}
