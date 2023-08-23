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

      console.log("carrinho: ", this.bd['carrinho']);
      
      return true;
    }

    return false;
  }

  removeProdutoCarrinho(posicao: number){
    //remove 1 elemento na posicao passada
    this.bd['carrinho'].splice(posicao, 1);
    return true;
  }

  limparCarrinho(){
    this.bd['carrinho'] = [];
    
  }
}
