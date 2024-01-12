import { Directive, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnChanges,OnInit {
  constructor() {}
  @Input() defaultColor: string = 'rgb(255, 255, 172)';
  @Input() highlightColor: string = 'lightcoral';
  @Input() inputColor!: string;
  @HostListener('mouseenter') onMouse() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseout') outMouse() {
    this.backgroundColor = this.defaultColor;
  }
  @HostBinding('style.background') backgroundColor!: string;
  ngOnInit() {
    console.log(this.inputColor)
    this.backgroundColor = this.inputColor;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputColor']) {
      this.backgroundColor = this.inputColor;
    }
  }
}
