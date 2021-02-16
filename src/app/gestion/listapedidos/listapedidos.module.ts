import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapedidosPageRoutingModule } from './listapedidos-routing.module';

import { ListapedidosPage } from './listapedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapedidosPageRoutingModule
  ],
  declarations: [ListapedidosPage]
})
export class ListapedidosPageModule {}
