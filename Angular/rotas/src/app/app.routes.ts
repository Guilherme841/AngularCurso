import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { LoginDetalhesComponent } from './components/login-detalhes/login-detalhes.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'login/:id',
  //   component: LoginDetalhesComponent,
  // },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'register',
    // component:
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(routes);
