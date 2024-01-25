import { Component, OnInit } from '@angular/core';
import { IdService } from '../../services/id.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss',
})
export class CursosComponent implements OnInit {
  cursos!: Array<string>;
  constructor(private _idService: IdService) {}
  ngOnInit(): void {
    this.cursos = this._idService.cursos;
  }
}
