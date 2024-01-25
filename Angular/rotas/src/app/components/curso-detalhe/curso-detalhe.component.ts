import { Component, OnInit } from '@angular/core';
import { IdService } from '../../services/id.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  providers: [IdService],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss',
})
export class CursoDetalheComponent implements OnInit {
  id!: string | number;
  cursos!: Array<string>;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _idService: IdService,
    private _router: Router
  ) {}
  ngOnInit() {
    this.id = this._activeRoute.snapshot.params['id'];
    this.cursos = this._idService.cursos;
    this.cursos = this.cursos.filter((curso) => curso == this.id);
    if (this.cursos.length === 0) {
      this._router.navigate(['']);
    }
  }
}
