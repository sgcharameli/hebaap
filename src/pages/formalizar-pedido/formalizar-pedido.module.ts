import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormalizarPedidoPage } from './formalizar-pedido';

@NgModule({
  declarations: [
    FormalizarPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(FormalizarPedidoPage),
  ],
})
export class FormalizarPedidoPageModule {}
