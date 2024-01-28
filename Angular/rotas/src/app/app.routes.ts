import { Routes } from '@angular/router';

import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CursoDetalheComponent } from './components/curso-detalhe/curso-detalhe.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { AlunosComponent } from './components/alunos/alunos.component';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './components/aluno-detalhe/aluno-detalhe.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'cursos',
        loadComponent: () =>
          import('./components/cursos/cursos.component').then(
            (m) => m.CursosComponent
          ),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'alunos',
        loadComponent: () =>
          import('./components/alunos/alunos.component').then(
            (m) => m.AlunosComponent
          ),
        children: [
          {
            path: ':id',
            loadComponent: () =>
              import('./components/aluno-detalhe/aluno-detalhe.component').then(
                (m) => m.AlunoDetalheComponent
              ),
            children: [
              {
                path: 'form',
                loadComponent: () =>
                  import('./components/aluno-form/aluno-form.component').then(
                    (m) => m.AlunoFormComponent
                  ),
              },
            ],
          },
        ],
      },
      {
        path: 'curso/:id',
        loadChildren: () =>
          import('./components/curso-detalhe/curso-detalhe-route').then(
            (m) => m.routes
          ),
      },
    ],
  },
];
