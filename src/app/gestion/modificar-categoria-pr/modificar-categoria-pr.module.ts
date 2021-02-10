import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarCategoriaPrPageRoutingModule } from './modificar-categoria-pr-routing.module';

import { ModificarCategoriaPrPage } from './modificar-categoria-pr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarCategoriaPrPageRoutingModule
  ],
  declarations: [ModificarCategoriaPrPage]
})
export class ModificarCategoriaPrPageModule {}
