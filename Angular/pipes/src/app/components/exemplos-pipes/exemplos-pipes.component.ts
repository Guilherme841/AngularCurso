import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { CamelCasePipe } from '../../pipes/camel-case.pipe';

@Component({
  selector: 'app-exemplos-pipes',
  standalone: true,
  imports: [
    JsonPipe,
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    LowerCasePipe,
    CamelCasePipe,
  ],
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.scss',
})
export class ExemplosPipesComponent {
  livro = {
    titulo: 'não há vagas',
    rating: 9.5,
    paginas: 200,
    preco: 39.9,
    lancamento: new Date(),
    url: 'http://www.livro.com.br',
  };
  constructor() {
    // console.log(typeof this.livro);
  }
}
