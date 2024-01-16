import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.scss',
})
export class OutputPropertyComponent {
  @Input() items: Array<string> = [];
  @Output() receiveValue: any = new EventEmitter();

  sendValue(value: string) {
    this.receiveValue.emit(value);
    console.log(this.items);
  }
}
