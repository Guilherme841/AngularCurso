import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../../services/alunos.service';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss',
})
export class AlunoFormComponent implements OnInit {
  constructor(
    private _alunoService: AlunosService,
    private _activatedRoute: ActivatedRoute
  ) {}
  nomeAluno!: any;
  objetoAluno!: any;
  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe((params) => {
      this.nomeAluno = params['id'];
    });
    this._alunoService.getAlunos().forEach((aluno: any) => {
      if (aluno.nome === this.nomeAluno) {
        return (this.objetoAluno = aluno);
      }
    });
  }
  onSubmit() {}
}
