import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarnesPageRoutingModule } from './carnes-routing.module';

import { CarnesPage } from './carnes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnesPageRoutingModule
  ],
  declarations: [CarnesPage]
})
export class CarnesPageModule {

  listaProdutos = [
    {nome: "Carne Bovina",
     descricao: "1200g",
     valor: 6
    },
    {nome: "Carne Suína",
     descricao: "1200g",
     valor: 7
    },
    {nome: "Carne de Frango",
     descricao: "300g",
     valor: 8
    },
    {nome: "Carne de Peixe",
     descricao: "1000g",
     valor: 9
    },
    {nome: "Carne moída",
     descricao: "500g",
     valor: 10
    }
  ];

  constructor() { }

  ngOnInit() {

  }
}
