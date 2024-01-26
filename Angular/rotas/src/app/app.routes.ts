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
        component: CursosComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'alunos',
        component: AlunosComponent,
        children: [
          {
            path: 'alunos/:id',
            component: AlunoDetalheComponent,
          },
        ],
      },
      {
        path: 'aluno/form',
        component: AlunoFormComponent,
      },
      {
        path: 'curso/:id',
        component: CursoDetalheComponent,
      },
    ],
  },
];
