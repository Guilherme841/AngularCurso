import { Routes } from '@angular/router';

import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { LayoutComponent } from './ui/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'curso/:id',
        component: CursoDetalheComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
