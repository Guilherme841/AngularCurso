import { Component, OnInit } from '@angular/core';
import { IdService } from '../../services/id.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private _activeRoute: ActivatedRoute) {}
  ngOnInit() {
    this.id = this._activeRoute.snapshot.params['id'];
  }
}
