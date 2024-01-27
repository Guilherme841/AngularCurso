import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: Array<object> = [
    {
      id: 1,
      nome: 'Fulano',
      email: 'aluno@yahoo.com',
    },
    {
      id: 2,
      nome: 'Ciclano',
      email: 'aluno@yahoo.com',
    },
    {
      id: 3,
      nome: 'Beltrano',
      email: 'aluno@yahoo.com',
    },
  ];
  getAlunos() {
    return this.alunos;
  }
  constructor() {}
}
