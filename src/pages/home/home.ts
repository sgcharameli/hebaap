import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NuevoPedidoPage } from './../nuevo-pedido/nuevo-pedido';
import { PedidosPage } from './../pedidos/pedidos';
import { InformacionPage } from './../informacion/informacion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tabNuevoPedido = NuevoPedidoPage;
  tabHistoricosPedidos = PedidosPage;
  tabInfo = InformacionPage;

  constructor(public navCtrl: NavController) {

  }
}