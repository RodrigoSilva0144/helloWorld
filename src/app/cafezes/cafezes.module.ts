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

  listaProdutos = [
    {nome: "Café Coração",
     descricao: "300g - cilíndrico",
     valor: 7
    },
    {nome: "Café três Estrelas",
     descricao: "330g - cilíndrico",
     valor: 8
    },
    {nome: "Café Solúvel",
     descricao: "400g - empacotado",
     valor: 10
    },
    {nome: "Café Pílão",
     descricao: "300g - empacotado",
     valor: 9
    },
    {nome: "Café Orgânico",
     descricao: "500g",
     valor: 14
    }
  ];

  constructor() { }

  ngOnInit() {

  }
}
