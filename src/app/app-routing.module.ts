import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registroempresa',
    loadChildren: () => import('./registroempresa/registroempresa.module').then( m => m.RegistroempresaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./gestion/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./gestion/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },  {
    path: 'modif-admin',
    loadChildren: () => import('./gestion/modif-admin/modif-admin.module').then( m => m.ModifAdminPageModule)
  },
  {
    path: 'lista-categoria-pr',
    loadChildren: () => import('./gestion/lista-categoria-pr/lista-categoria-pr.module').then( m => m.ListaCategoriaPrPageModule)
  },
  {
    path: 'modificar-categoria-pr',
    loadChildren: () => import('./gestion/modificar-categoria-pr/modificar-categoria-pr.module').then( m => m.ModificarCategoriaPrPageModule)
  },
  {
    path: 'lista-producto',
    loadChildren: () => import('./gestion/lista-producto/lista-producto.module').then( m => m.ListaProductoPageModule)
  },
  {
    path: 'modificar-producto',
    loadChildren: () => import('./gestion/modificar-producto/modificar-producto.module').then( m => m.ModificarProductoPageModule)
  }


];

//folder/Inbox

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
