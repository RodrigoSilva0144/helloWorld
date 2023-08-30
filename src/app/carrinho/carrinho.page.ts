import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {


  listaProdutos: any = [];
  totalCarrinho: number = 0;

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
    this.calcularCarrinho();
  }

  buscarItensCarrinho() {
    this.listaProdutos = this.bdtemp.buscar('carrinho');
    this.calcularCarrinho();
  }

  ionViewWillEnter() {
    this.buscarItensCarrinho();

  }

  removerDoCarrinho(posicao: number) {
    this.bdtemp.removeProdutoCarrinho(posicao);
    this.buscarItensCarrinho();
  }

  calcularCarrinho() {
    this.totalCarrinho = 0;
    for (let produto of this.listaProdutos) {
      this.totalCarrinho += produto.valor;
    }

  }

  limparCarrinho() {
    this.bdtemp.limparCarrinho();
    this.buscarItensCarrinho();
  }
}
