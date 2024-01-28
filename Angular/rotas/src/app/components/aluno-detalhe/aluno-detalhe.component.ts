import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.scss',
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  subscribe!: Subscription;
  idAluno: string = '';
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _alunosService: AlunosService
  ) {}
  ngOnInit(): void {
    this.subscribe = this._activatedRoute.params.subscribe((id) => {
      this.idAluno = id['id'];
      this._alunosService.getAlunos().forEach((objeto: any) => {
        if (objeto.nome === this.idAluno) {
          console.log(objeto);
          return objeto;
        }
      });
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
