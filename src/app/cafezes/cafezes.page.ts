import { Component, OnInit } from '@angular/core';

import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-cafezes',
  templateUrl: './cafezes.page.html',
  styleUrls: ['./cafezes.page.scss'],
})
export class CafezesPage implements OnInit {

    qtdeItensCarrinho = 0;


    listaProdutos = [
      {nome: "Café Coração",
       descricao: "300g - cilíndrico",
       valor: 7,
       foto:""
      },
      {nome: "Café três Estrelas",
       descricao: "330g - cilíndrico",
       valor: 8,
       foto:""
      },
      {nome: "Café Solúvel",
       descricao: "400g - empacotado",
       valor: 10,
       foto:""
      },
      {nome: "Café Pílão",
       descricao: "300g - empacotado",
       valor: 9,
       foto:""
      },
      {nome: "Café Orgânico",
       descricao: "500g",
       valor: 14,
       foto:""
      }
    ];

    constructor(public bdtemp: BdtempService) { }

    ngOnInit() {

    }
    addProdutoCarrinho(produto: any){
      this.bdtemp.addProdutoCarrinho(produto);

      this.buscarDadosCarrinho();
    }

    buscarDadosCarrinho(){
      this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');
    }

  }

