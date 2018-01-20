import { PedidosProvider } from './../../providers/pedidos/pedidos';
import { Pedido } from './../../model/Pedido';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class PedidosPage implements OnInit{

  pedidos: Pedido[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private pedidosProvider: PedidosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidosPage');
  }

  ngOnInit() {
    this.pedidos = this.pedidosProvider.obtenerPedidos();
  }
}
