import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaCategoriaPrPage } from './lista-categoria-pr.page';

const routes: Routes = [
  {
    path: '',
    component: ListaCategoriaPrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaCategoriaPrPageRoutingModule {}
