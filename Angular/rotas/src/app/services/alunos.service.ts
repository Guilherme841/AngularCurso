import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: Array<object> = [
    {
      aluno: 'Aluno01',
      nome: 'Fulano',
      email: 'aluno@yahoo.com',
    },
    {
      aluno: 'Aluno02',
      nome: 'Ciclano',
      email: 'aluno@yahoo.com',
    },
    {
      aluno: 'Aluno03',
      nome: 'Beltrano',
      email: 'aluno@yahoo.com',
    },
  ];
  getAlunos() {
    return this.alunos;
  }
  constructor() {}
}
