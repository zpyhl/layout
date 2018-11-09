import { ArithmeticComponent } from './arithmetic.component';
import { SortComponent } from './sort/sort.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [{
  path: '',
  component: ArithmeticComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'sort',
    },
    {
      path: 'sort',
      component: SortComponent,
    },

  ],
}];


export const declarations = [
  ArithmeticComponent,
  SortComponent,
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArithmeticRoutingModule {
}

