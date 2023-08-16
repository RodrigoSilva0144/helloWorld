import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeterrabasPageRoutingModule } from './beterrabas-routing.module';

import { BeterrabasPage } from './beterrabas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeterrabasPageRoutingModule
  ],
  declarations: [BeterrabasPage]
})
export class BeterrabasPageModule {}
