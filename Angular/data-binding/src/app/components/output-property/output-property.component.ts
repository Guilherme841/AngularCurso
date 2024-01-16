import {
  Component,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  Renderer2,
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
  constructor(private renderer: Renderer2) {}
  incremento() {
    // console.log(this.inputFieldValue.nativeElement)
    if (this.inputFieldValue.nativeElement.value >= 10) {
      alert('Maior que 10!');
      return;
    }
    this.inputFieldValue.nativeElement.value++;
    this.valueChanged.emit({ newValue: this.valor });
    console.log(this.inputFieldValue.nativeElement.value); // mostra o valor do elemento
    this.renderer.setStyle(
      this.inputFieldValue.nativeElement,
      'background-color',
      'lightgreen'
    );
  }
  decremento() {
    if (this.inputFieldValue.nativeElement.value <= 0) {
      alert('Menor que 0!');
      return;
    }
    this.inputFieldValue.nativeElement.value--;
    this.valueChanged.emit({ newValue: this.valor });
    console.log(this.inputFieldValue.nativeElement); // mostra o elemento
    this.renderer.setStyle(
      this.inputFieldValue.nativeElement,
      'background-color',
      'lightcoral'
    );
  }
  reset() {
    this.valor = 0;
    this.valueChanged.emit({ newValue: 0 });
    this.renderer.setStyle(
      this.inputFieldValue.nativeElement,
      'background-color',
      'white'
    );
  }
}
