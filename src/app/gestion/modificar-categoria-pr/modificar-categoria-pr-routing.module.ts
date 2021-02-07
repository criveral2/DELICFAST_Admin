import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarCategoriaPrPage } from './modificar-categoria-pr.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarCategoriaPrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarCategoriaPrPageRoutingModule {}
