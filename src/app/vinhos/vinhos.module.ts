import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VinhosPageRoutingModule } from './vinhos-routing.module';

import { VinhosPage } from './vinhos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VinhosPageRoutingModule
  ],
  declarations: [VinhosPage]
})
export class VinhosPageModule {

  listaProdutos = [
    {nome: "Vinho Tinto",
     descricao: "Produzidos por meio da fermentação do suco extraído de uvas tintas",
     valor: 16
    },
    {nome: "Vinho Branco",
     descricao: "Pode ser produzido a partir de uvas brancas e tintas",
     valor: 17
    },
    {nome: "Vinho Rosé",
     descricao: "É produzido a partir de uvas tintas por diferentes estilos de vinificação",
     valor: 18
    },
    {nome: "Vinho Espumante",
     descricao: "É um tipo de vinho produzido com gás carbônico dissolvido",
     valor: 19
    },
    {nome: "Vinho Licoroso",
     descricao: "Uma bebida que tem a fermentação interrompida antes do término pela adição de aguardente vínica",
     valor: 20
    }
  ];

  constructor() { }

  ngOnInit() {

  }
}
