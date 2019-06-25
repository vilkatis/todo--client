import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRouting } from './core.routing';
import { CoreComponent } from './core.component';
import { components } from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CoreComponent,
    ...components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreRouting
  ]
})
export class CoreModule { }
