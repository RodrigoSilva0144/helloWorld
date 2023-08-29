import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-beterrabas',
  templateUrl: './beterrabas.page.html',
  styleUrls: ['./beterrabas.page.scss'],
})
export class BeterrabasPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Berinjela",
     descricao: "Berinjela 500g",
     valor: .50,
     foto:"././assets/img/berinjela.jpg"
    },
    {nome: "Tomate",
     descricao: "Tomate 500g",
     valor: 1,
     foto:"././assets/img/tomate.jpg"
    },
    {nome: "Alface Americana",
     descricao: "Alface Americana 1 unidade",
     valor: 9.20,
     foto:"././assets/img/alface.webp"
    },
    {nome: "Alho roxo",
     descricao: " Alho roxo 200g",
     valor: .20,
     foto:"././assets/img/alho.jpg"
    },
    {nome: "Cenoura",
     descricao: "Cenoura 570g",
     valor: .75,
     foto:"././assets/img/cenoura.jpg"
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
