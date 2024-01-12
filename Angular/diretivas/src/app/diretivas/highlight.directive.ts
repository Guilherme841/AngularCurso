import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor() { }
  @HostListener('mouseenter') onMouse() {
    this.backgroundColor = 'lightcoral'
  }
  @HostListener('mouseout') outMouse() {
    this.backgroundColor = 'rgb(255, 255, 172)'
  }
  @HostBinding('style.background') backgroundColor!: string;
}
