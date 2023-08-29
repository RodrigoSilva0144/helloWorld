import { BdtempService } from './../services/bdtemp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  qtdeItensCarrinho = 0;

  listaProdutos =[
    {
      nome: "Alcatra bovino",
      descricao: "Alcatra Bovina 500g",
      valor: 16,
      foto: '././assets/img/alcatra.jpg'
    },
    {
      nome: "Paleta",
      descricao: "Paleta bovina 1kg",
      valor: 19.30,
      foto: '././assets/img/paleta.jpg'
    },
    {
      nome: "Açúcar",
      descricao: "Açúcar Cristal Santa Isabel 5Kg",
      valor: 13,
      foto: '././assets/img/açucar.webp'
    },
    {
      nome: "Feijão",
      descricao: "Feijão Carioca Kicaldo 1kg",
      valor: 9.80,
      foto: '././assets/img/feijão.jpg'
    },
    {
      nome: "Café Pilão",
      descricao: "Café Torrado e Moído Pilão Extra Forte 500g",
      valor: 18,
      foto: '././assets/img/cafe.jpg'
    }
  ];

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }
  addProdutoCarrinho(produto: any) {
    this.bdtemp.addProdutoCarrinho(produto);
    this.buscarDadosCarrinho();
  }

  buscarDadosCarrinho() {
    this.qtdeItensCarrinho = this.bdtemp.buscar('qtdeItensCarrinho');

  }
}
