import { Component, OnInit } from '@angular/core';
import { BdtempService } from '../services/bdtemp.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  listaItens = [];
  private bd: any = [];

  salvar(chave: string, valor: any){
    if(chave.trim()){
      this.bd[chave] = valor;
      return true;
    }

    return false
  }

  constructor(public bdtemp: BdtempService) { }

  ngOnInit() {
  }

  buscarItensCarrinho(){
    this.listaItens = this.bdtemp.buscar('carrinho');
  }
  // é chamado toda vez que a tela vai aparecer
  ionViewWillEnter(){
    this.buscarItensCarrinho();
  }
  limparCarrinho(){
    this.limparCarrinho();

  }
  totalCarrinho(){
    //cra a variavel de total
    let total =0;
    //verifica se o carrinho tm itens
    if(this.bd['carrinho'].length > 0){
      //percorre o camiho e soma ao total
      for(let prod of this.bd['carrinho']){
        total = total + prod.valor;
      }
    }
    this.salvar('qtdeItensCarrinho', this.bd['carrinho'].length);
    this.salvar('totalCarrinho', total);
  }

  removeProdutoCarrinho(posicao: number){
    //remove 1 elemento na posicao passada
    this.bd['carrinho'].splice(posicao, 1);

    this.totalCarrinho();

    return true;
  }
}

