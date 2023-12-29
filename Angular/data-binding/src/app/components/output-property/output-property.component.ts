import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css',
  // outputs: 'valueChanged', Função exposta por metadado
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;
  @Output() valueChanged: any = new EventEmitter();

  incremeto() {
    if (this.valor >= 10) {
      alert('Maior que 10!');
      return;
    }
    this.valor++;
    this.valueChanged.emit({ newValue: this.valor });
  }
  decremento() {
    if (this.valor <= 0) {
      alert('Menor que 0!');
      return;
    }
    this.valor--;
    this.valueChanged.emit({ newValue: this.valor });
  }
  reset() {
    this.valor = 0;
    this.valueChanged.emit({ newValue: 0 });
  }
}
