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
export class CarnesPageModule {

  listaProdutos = [
    {nome: "Beterraba Açucareira",
     descricao: "Usada para produçao de açúcar",
     valor: 1
    },
    {nome: "Beterraba de mesa",
     descricao: "Consumida como hortaliça",
     valor: 2
    },
    {nome: "Beterraba forrageira",
     descricao: "Utilizada para aliemntação animal",
     valor: 3
    },
    {nome: "Beterraba branca",
     descricao: "Raízes doces e follhas amargas",
     valor: 4
    },
    {nome: "Beterraba Dourada",
     descricao: "Seu sabor se torna mais adocicado ao assar",
     valor: 5
    }
  ];

  constructor() { }

  ngOnInit() {

  }
}
