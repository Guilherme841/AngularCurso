import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login/:id',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

export const routing: ModuleWithProviders<RouterModule> =
  RouterModule.forRoot(routes);
