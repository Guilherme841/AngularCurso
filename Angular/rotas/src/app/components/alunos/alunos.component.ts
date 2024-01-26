import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [],
  providers: [AlunosService],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent implements OnInit {
  protected alunos!: Array<object>;
  nomeAlunos: Array<string> = [];
  constructor(private _alunosService: AlunosService) {}
  ngOnInit() {
    this.alunos = this._alunosService.getAlunos();
    this.alunos.find((pessoa: any) => {
      let { nome } = pessoa;
      this.nomeAlunos.push(nome);
    });
  }
}
