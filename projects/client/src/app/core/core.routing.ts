import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { ModuleWithProviders } from '@angular/core';

const ROUTES: Routes = [
  {
    path: '',
    component: CoreComponent
  }
];

export const CoreRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);
