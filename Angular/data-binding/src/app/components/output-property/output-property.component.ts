import {
  Component,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css',
  // outputs: 'valueChanged', Função exposta por metadado.
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;
  @Output() valueChanged: any = new EventEmitter();
  @ViewChild('fieldInput', { static: false }) inputFieldValue!: ElementRef;
  constructor() {}
  incremeto() {
    if (this.valor >= 10) {
      alert('Maior que 10!');
      return;
    }
    this.inputFieldValue.nativeElement.value++;
    this.valueChanged.emit({ newValue: this.valor });
    console.log(this.inputFieldValue.nativeElement.value); // mostra o valor do elemento
  }
  decremento() {
    if (this.valor <= 0) {
      alert('Menor que 0!');
      return;
    }
    this.inputFieldValue.nativeElement.value--;
    this.valueChanged.emit({ newValue: this.valor });
    console.log(this.inputFieldValue.nativeElement); // mostra o elemento
  }
  reset() {
    this.valor = 0;
    this.valueChanged.emit({ newValue: 0 });
  }
}
