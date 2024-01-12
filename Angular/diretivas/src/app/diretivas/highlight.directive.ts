import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor() {}
  defaultColor: string = 'rgb(255, 255, 172)';
  highlightColor: string = 'lightcoral';
  @HostListener('mouseenter') onMouse() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseout') outMouse() {
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.background') backgroundColor!: string;
}
