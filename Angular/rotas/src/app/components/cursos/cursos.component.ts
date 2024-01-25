import { Component, OnDestroy, OnInit } from '@angular/core';
import { IdService } from '../../services/id.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos!: Array<string>;
  subscribe!: Subscription;
  pagina!: number;
  constructor(
    private _idService: IdService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.subscribe = this._activatedRoute.queryParams.subscribe(
      (paramsIndex) => {
        this.pagina = paramsIndex['pagina'];
      }
    );
    this.cursos = this._idService.cursos;
  }
  nextPage() {
    this._router.navigate(['/cursos'], {
      queryParams: { pagina: ++this.pagina },
    });
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}
