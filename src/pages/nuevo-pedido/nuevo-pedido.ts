import { ProductosProvider } from './../../providers/productos/productos';
import { Producto } from './../../model/producto';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nuevo-pedido',
  templateUrl: 'nuevo-pedido.html',
})
export class NuevoPedidoPage implements OnInit {

  productos: Producto[];
  stockMensajesMapping: {[k: string]: string};

  constructor(public navCtrl: NavController, 
    private navParams: NavParams,
    private productosProvider: ProductosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoPedidoPage');
  }

  ngOnInit() {
    this.productos = this.productosProvider.obtenerProductos();
    this.stockMensajesMapping = {'=0': 'No disponible',
    '=1': 'Sólo queda # disponible', 'other': 'Quedan # disponibles'};
  }
}
