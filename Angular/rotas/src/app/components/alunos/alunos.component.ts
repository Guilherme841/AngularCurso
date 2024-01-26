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
  constructor(private _alunosService: AlunosService) {}
  ngOnInit() {
    this.alunos = this._alunosService.getAlunos();
    let nomeAlunos = this.alunos.find((pessoa: any) => {
      let {nome}  = pessoa;
    });
  }
}
