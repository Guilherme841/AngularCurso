import { Routes } from '@angular/router';

import { CursosComponent } from './components/cursos/cursos.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cursos',
    component: CursosComponent,
  },
  {
    path: 'curso/:id',
    component: CursosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
