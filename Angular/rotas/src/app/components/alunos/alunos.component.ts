import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../../services/alunos.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  providers: [AlunosService],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss',
})
export class AlunosComponent implements OnInit {
  protected alunos!: Array<object>;
  objeto = { data: 12, dia: 10 };
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
