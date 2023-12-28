import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-property',
  standalone: true,
  imports: [],
  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.css',
  // inputs: ['valorStringInput'] // posso expor valores de inputs como metadados, pode ser renomeado
})
export class InputPropertyComponent {
  @Input() // decorator pra expor a variavel e um parametro de reconhecimento
  valorString: string = '';
}
