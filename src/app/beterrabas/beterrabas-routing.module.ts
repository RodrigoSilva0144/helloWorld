import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeterrabasPage } from './beterrabas.page';

const routes: Routes = [
  {
    path: '',
    component: BeterrabasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeterrabasPageRoutingModule {}
