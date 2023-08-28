import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafezesPageRoutingModule } from './cafezes-routing.module';

import { CafezesPage } from './cafezes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafezesPageRoutingModule
  ],
  declarations: [CafezesPage]
})
export class CafezesPageModule {

}
