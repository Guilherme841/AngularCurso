import { Component, OnInit } from '@angular/core';
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
export class AlunoDetalheComponent implements OnInit {
  subscribe!: Subscription;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _alunosService: AlunosService
  ) {}
  ngOnInit(): void {
    this.subscribe = this._activatedRoute.params.subscribe(() => {

    });
  }
}
