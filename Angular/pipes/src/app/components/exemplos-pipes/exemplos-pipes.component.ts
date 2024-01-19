import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

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
export class ExemplosPipesComponent implements OnInit {
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
  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assíncrono!'), 2000);
  });
  constructor() {}
  asyncValueTwo = interval(2000).pipe(map((msg) => 'Valor Assíncrono Dois'));
  ngOnInit() {
    this.asyncValueTwo.subscribe((msg) => {
      console.log(msg);
    });
  }
}
