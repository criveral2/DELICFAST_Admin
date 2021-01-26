import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifAdminPage } from './modif-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ModifAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifAdminPageRoutingModule {}
