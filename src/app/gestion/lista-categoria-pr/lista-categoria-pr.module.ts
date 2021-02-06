import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaCategoriaPrPageRoutingModule } from './lista-categoria-pr-routing.module';

import { ListaCategoriaPrPage } from './lista-categoria-pr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaCategoriaPrPageRoutingModule
  ],
  declarations: [ListaCategoriaPrPage]
})
export class ListaCategoriaPrPageModule {}
