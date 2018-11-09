import { LeftFixedComponent } from './layout/left-fixed/left-fixed.component';
import { FlexComponent } from './layout/flex/flex.component';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowComponent } from './layout/flow/flow.component';
import { HolyCupComponent } from './layout/holy-cup/holy-cup.component';


const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'layout',
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'flow',
      },
      {
        path: 'flow',
        component: FlowComponent,
      },
      {
        path: 'flex',
        component: FlexComponent,
      },
      {
        path: 'cup',
        component: HolyCupComponent,
      },
      {
        path: 'leftfixed',
        component: LeftFixedComponent,
      }
    ]
  },
  {
    path: 'arithmetic',
    loadChildren: './arithmetic/arithmetic.module#ArithmeticModule'
  },
  {
    path: 'cnode',
    loadChildren: './cnode/cnode.module#CnodeModule'
  }

];


export const declarations = [
  AppComponent,
  LayoutComponent,
  FlowComponent,
  FlexComponent,
  HolyCupComponent,
  LeftFixedComponent,
];


export const providers = [

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

