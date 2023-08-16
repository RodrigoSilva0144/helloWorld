import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafezesPage } from './cafezes.page';

const routes: Routes = [
  {
    path: '',
    component: CafezesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafezesPageRoutingModule {}
