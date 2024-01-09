import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  standalone: true,
  imports: [],
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.scss',
})
export class OperadorElvisComponent {
  pessoa: object = {
    name: 'Fulano',
    age: 20,
    address: {
      street: 'qualquer',
      number: 76,
    },
  };
}
