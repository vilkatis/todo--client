import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRouting } from './core.routing';
import { CoreComponent } from './core.component';
import { components } from './components';

@NgModule({
  declarations: [
    CoreComponent,
    ...components
  ],
  imports: [
    CommonModule,
    CoreRouting
  ]
})
export class CoreModule { }
