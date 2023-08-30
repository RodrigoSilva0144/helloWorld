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
      {nome: "Café 3 Corações",
       descricao: "Café 3 Corações Tradicional 500g",
       valor: 7,
       foto:"././assets/img/cafe.jpg"
      },
      {nome: "Achocolatado Pó Original Toddy",
       descricao: "Achocolatado Pó Original Toddy Pote 370g",
       valor: 8.50,
       foto:"././assets/img/toddy.jpg"
      },
      {nome: "Óleo De Soja Soya",
       descricao: "Óleo De Soja Soya 900 ml",
       valor: 5.50,
       foto:"././assets/img/soya.jpg"
      },
      {nome: "Sal Refinado Cisne",
       descricao: "Sal Refinado Cisne 1kg",
       valor: 4.25,
       foto:"././assets/img/sal.jpg"
      },
      {nome: "Macarrão de Sêmola Renata",
       descricao: "Macarrão de Sêmola com Ovos Penne Renata Pacote 500g",
       valor: 3.90,
       foto:"././assets/img/macarrão.jpg"
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

