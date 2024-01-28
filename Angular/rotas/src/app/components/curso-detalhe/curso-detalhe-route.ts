import { Route } from '@angular/router';
import { CursoDetalheComponent } from './curso-detalhe.component';

export const routes: Route[] = [
  {
    path: 'curso/:id',
    component: CursoDetalheComponent,
  }
];
