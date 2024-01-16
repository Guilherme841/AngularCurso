import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-output-property',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
