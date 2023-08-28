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
    {nome: "beringela",
     descricao: "",
     valor: 1,
     foto:""
    },
    {nome: "Tomate",
     descricao: "",
     valor: 2,
     foto:""
    },
    {nome: "Alface Americana",
     descricao: "",
     valor: 3,
     foto:""
    },
    {nome: "Cebolinha",
     descricao: "",
     valor: 4,
     foto:""
    },
    {nome: "Cenoura",
     descricao: "",
     valor: 5,
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
