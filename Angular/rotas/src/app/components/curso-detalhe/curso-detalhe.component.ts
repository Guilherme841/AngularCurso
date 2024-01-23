import { Component, OnInit } from '@angular/core';
import { IdService } from '../../services/id.service';

@Component({
  selector: 'app-curso-detalhe',
  standalone: true,
  imports: [],
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss',
})
export class CursoDetalheComponent implements OnInit {
  id!: unknown;
  constructor(private _id: IdService) {}
  ngOnInit() {
    // console.log(this._id.id)
    this.id = this._id.id;
  }
}
