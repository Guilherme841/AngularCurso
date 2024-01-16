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
  getDate(): string {
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    return [dia, mes, ano].join('/');
  }
  data: string = this.getDate();
  sendValue(value: string) {
    this.receiveValue.emit(value);
  }
}
