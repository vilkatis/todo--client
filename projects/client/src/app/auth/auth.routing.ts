import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginContainer, RegisterContainer } from './containers';

const ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', redirectTo: 'login'},
      {path: 'login', component: LoginContainer},
      {path: 'register', component: RegisterContainer}
    ]
  }
];

export const AuthRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);
