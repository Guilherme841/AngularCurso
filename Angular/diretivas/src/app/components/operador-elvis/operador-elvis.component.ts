import { Component } from '@angular/core';

interface Pessoa {
  name: string;
  age: number;
  address: {
    street: string;
    number: number;
  };
}

@Component({
  selector: 'app-operador-elvis',
  standalone: true,
  imports: [],
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.scss',
})
export class OperadorElvisComponent {
  constructor() {}
  // pessoa2: { name2: string; age2: number } = { name2: 'ciclano', age2: 20 };
  pessoa: Pessoa = {
    name: 'Fulano',
    age: 20,
    address: {
      street: 'qualquer',
      number: 76,
    },
  };
}
