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
  },  {
    path: 'gestion',
    loadChildren: () => import('./gestion/gestion.module').then( m => m.GestionPageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./gestion/producto/producto.module').then( m => m.ProductoPageModule)
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
