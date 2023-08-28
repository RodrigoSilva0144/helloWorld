import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-vinhos',
  templateUrl: './vinhos.page.html',
  styleUrls: ['./vinhos.page.scss'],
})
export class VinhosPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos = [
    {nome: "Vinho Tinto",
     descricao: "Produzidos por meio da fermentação do suco extraído de uvas tintas",
     valor: 16,
     foto:""
    },
    {nome: "Vinho Branco",
     descricao: "Pode ser produzido a partir de uvas brancas e tintas",
     valor: 17,
     foto:""
    },
    {nome: "Vinho Rosé",
     descricao: "É produzido a partir de uvas tintas por diferentes estilos de vinificação",
     valor: 18,
     foto:""
    },
    {nome: "Vinho Espumante",
     descricao: "É um tipo de vinho produzido com gás carbônico dissolvido",
     valor: 19,
     foto:""
    },
    {nome: "Vinho Licoroso",
     descricao: "Uma bebida que tem a fermentação interrompida antes do término pela adição de aguardente vínica",
     valor: 20,
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
