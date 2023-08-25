import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'promocoes',
    loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
  },
  {
    path: 'carnes',
    loadChildren: () => import('./carnes/carnes.module').then( m => m.CarnesPageModule)
  },
  {
    path: 'vinhos',
    loadChildren: () => import('./vinhos/vinhos.module').then( m => m.VinhosPageModule)
  },
  {
    path: 'cafezes',
    loadChildren: () => import('./cafezes/cafezes.module').then( m => m.CafezesPageModule)
  },
  {
    path: 'beterrabas',
    loadChildren: () => import('./beterrabas/beterrabas.module').then( m => m.BeterrabasPageModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
