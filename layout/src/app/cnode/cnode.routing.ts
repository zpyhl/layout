import { CnodeComponent } from './cnode.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CnodeComponent,
  },

];


export const declarations = [
  CnodeComponent,
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CnodeRoutingModule {
}

