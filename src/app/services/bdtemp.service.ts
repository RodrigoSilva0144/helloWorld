import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BdtempService {

  private bd: any = [];

  constructor() { }

  salvar(chave: string, valor: any){
    if(chave.trim()){
      this.bd[chave] = valor;
      return true;
    }

    return false
  }

  buscar(chave: string){
    if(chave.trim()){
      return this.bd[chave];
    }
    return null;
  }

  deletar(chave: string){
    if(chave.trim()){
      delete this.bd[chave];
      return true;
    }

    return false;
  }

  addProdutoCarrinho(produto:any){
    //primeiro verifica se o carrinho nao existe
    //se não (!) existir
    if(!this.bd['carrinho']){
      this.bd['carrinho'] = []; // Cria o caminho no bd
      // e inicia o vetor vazio.
    }

    if(produto){
      //adiciona o produto no final do vetor do carrinho
      this.bd['carrinho'].push(produto);

      this.totalCarrinho();

      return true;
    }

    return false;
  }

  removeProdutoCarrinho(posicao: number){
    //remove 1 elemento na posicao passada
    this.bd['carrinho'].splice(posicao, 1);

    this.totalCarrinho();

    return true;
  }

  limparCarrinho(){
    this.bd['carrinho'] = [];
    
    this.totalCarrinho();
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
}
