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
    {nome: "Vodka Stolinov",
     descricao: "Bebida alcoólica Vodka Stolinov garrafa 900 ml",
     valor: 25,
     foto:"././assets/img/aa9d2bba8b3410bfd5f3e16f6a5503037b17de83bb7ac04940ee36fe0ade948d_full.jpg"
    },
    {nome: "Whisky Johnnie Walker Red Label",
     descricao: "Johnnie Walker Red Label Blended Scotch Whisky 1000ml",
     valor: 110,
     foto:"././assets/img/red label.png"
    },
    {nome: "Cerveja Heineken Puro Malte Pilsen",
     descricao: "Cerveja Heineken Puro Malte Pilsen - 12 Unidades Garrafa 600ml",
     valor: 18,
     foto:"././assets/img/heineken.webp"
    },
    {nome: "Vinho San Severo Bordo Tinto Suave",
     descricao: "Vinho San Severo Bordo Tinto Suave 750ml",
     valor: 20,
     foto:"././assets/img/vinho.png"
    },
    {nome: "Cachaça 51",
     descricao: "Cachaça 51 965ml",
     valor: 35,
     foto:"././assets/img/cachaça.webp"
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
