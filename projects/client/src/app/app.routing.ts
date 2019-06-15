import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './providers';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'core',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: 'core',
    canActivate: [AuthGuard],
    loadChildren: () => import('./core/core.module').then(mod => mod.CoreModule)
  },
  {
    path: '*',
    redirectTo: 'core',
    pathMatch: 'full'
  },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(ROUTES);
