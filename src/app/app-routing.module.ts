import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NoLoginGuard } from './guards/no-login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',canActivate:[NoLoginGuard],
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registroempresa',canActivate:[AuthGuard],
    loadChildren: () => import('./registroempresa/registroempresa.module').then( m => m.RegistroempresaPageModule)
  },
  {
    path: 'home', canActivate:[AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'producto',canActivate:[AuthGuard],
    loadChildren: () => import('./gestion/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'categoria',canActivate:[AuthGuard],
    loadChildren: () => import('./gestion/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'modif-admin',canActivate:[AuthGuard],
    loadChildren: () => import('./gestion/modif-admin/modif-admin.module').then( m => m.ModifAdminPageModule)
  },
  {
    path: 'lista-categoria-pr', canActivate:[AuthGuard],
    loadChildren: () => import('./gestion/lista-categoria-pr/lista-categoria-pr.module').then( m => m.ListaCategoriaPrPageModule)
  },
  {
    path: 'modificar-categoria-pr', canActivate:[AuthGuard],
    loadChildren: () => import('./gestion/modificar-categoria-pr/modificar-categoria-pr.module').then( m => m.ModificarCategoriaPrPageModule)
  },
  {
    path: 'lista-producto', canActivate:[AuthGuard],
    loadChildren: () => import('./gestion/lista-producto/lista-producto.module').then( m => m.ListaProductoPageModule)
  },
  {
    path: 'modificar-producto', canActivate:[AuthGuard],
    loadChildren: () => import('./gestion/modificar-producto/modificar-producto.module').then( m => m.ModificarProductoPageModule)
  },
  {
    path: 'pedido', canActivate:[AuthGuard],
    loadChildren: () => import('./pedido/pedido.module').then( m => m.PedidoPageModule)
  },
  {
    path: 'listapedidos', canActivate:[AuthGuard],
    loadChildren: () => import('./gestion/listapedidos/listapedidos.module').then( m => m.ListapedidosPageModule)
  },
  {
    path: 'mapa', canActivate:[AuthGuard],
    loadChildren: () => import('./gestion/mapa/mapa.module').then( m => m.MapaPageModule)
  },


];

//folder/Inbox

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
