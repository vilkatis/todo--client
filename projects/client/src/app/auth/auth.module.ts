import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { components } from './components';
import { containers } from './containers';
import { AuthRouting } from './auth.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    ...components,
    ...containers
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRouting
  ]
})
export class AuthModule {
}
