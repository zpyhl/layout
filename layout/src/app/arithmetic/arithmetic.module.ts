import { ArithmeticRoutingModule, declarations } from './arithmetic.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortComponent } from './sort/sort.component';

@NgModule({
  imports: [
    CommonModule,
    ArithmeticRoutingModule,
  ],
  declarations: [...declarations]
})
export class ArithmeticModule { }
