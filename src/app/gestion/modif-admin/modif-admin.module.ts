import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifAdminPageRoutingModule } from './modif-admin-routing.module';

import { ModifAdminPage } from './modif-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifAdminPageRoutingModule
  ],
  declarations: [ModifAdminPage]
})
export class ModifAdminPageModule {}
