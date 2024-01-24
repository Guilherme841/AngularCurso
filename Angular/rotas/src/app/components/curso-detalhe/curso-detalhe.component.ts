import { Component, OnInit } from '@angular/core';
import { IdService } from '../../services/id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss',
})
export class CursoDetalheComponent implements OnInit {
  id!: string | number;
  cursos!: Array<string>;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _idService: IdService
  ) {
    this.id = this._activeRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.cursos = this._idService.cursos;
    this.cursos = this.cursos.filter((curso) => curso == this.id);
  }
}
