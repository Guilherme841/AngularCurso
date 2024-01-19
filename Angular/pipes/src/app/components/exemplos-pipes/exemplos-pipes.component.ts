import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

import { CamelCasePipe } from '../../pipes/camel-case.pipe';
import { FormsModule } from '@angular/forms';

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
    DecimalPipe,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.scss',
})
export class ExemplosPipesComponent {
  livro = {
    titulo: 'não há vagas',
    rating: 9.1231,
    paginas: 200,
    preco: 39.99,
    lancamento: new Date(),
    url: 'http://www.livro.com.br',
  };
  listBooks: Array<string> = ['Livro', 'Livro', 'Livro'];
  searchBook: string = '';
  addBook(book: string) {
    this.listBooks.push(book);
  }
  getCourse() {
    if (
      this.listBooks.length === 0 ||
      this.searchBook === undefined ||
      this.searchBook.trim() === ''
    ) {
      return this.listBooks;
    }
    return this.listBooks.filter((v) => {
      if (v.toLowerCase().indexOf(this.searchBook.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
  constructor() {}
}
