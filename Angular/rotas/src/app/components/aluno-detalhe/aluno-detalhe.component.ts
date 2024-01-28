import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.scss',
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  subscribe!: Subscription;
  idAluno: string = '';
  objetoAluno: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _alunosService: AlunosService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.subscribe = this._activatedRoute.params.subscribe((id) => {
      this.idAluno = id['id'];
      this._alunosService.getAlunos().forEach((objeto: any) => {
        if (objeto.nome === this.idAluno) {
          return (this.objetoAluno = objeto);
        }
      });
    });
  }
  editarAluno() {
    this._router.navigate(['alunos', this.idAluno, 'form']);
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
