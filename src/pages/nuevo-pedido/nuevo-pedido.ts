import { ProductoPedido } from './../../model/ProductoPedido';
import { ProductoDetallePage } from './../producto-detalle/producto-detalle';
import { Pedido } from './../../model/Pedido';
import { ProductosProvider } from './../../providers/productos/productos';
import { Producto } from './../../model/Producto';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nuevo-pedido',
  templateUrl: 'nuevo-pedido.html',
})
export class NuevoPedidoPage implements OnInit {

  productos: Producto[];
  stockMensajesMapping: { [k: string]: string };
  pedido: Pedido;

  constructor(public navCtrl: NavController,
    private productosProvider: ProductosProvider,
    private modalCtrl: ModalController) {
      this.inicializarPedido();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoPedidoPage');
  }

  ngOnInit() {
    this.productos = this.productosProvider.obtenerProductos();
    this.inicializarPedido();
    this.stockMensajesMapping = {
      '=0': 'No disponible',
      '=1': 'Sólo queda # disponible',
      'other': 'Quedan # disponibles'
    };
  }

  mostrarDetalleProducto(producto: Producto) {
    let detalleProductoModal = this.modalCtrl.create(ProductoDetallePage, producto);
    detalleProductoModal.onDidDismiss(productoPedido => {
      console.log('productoPedido:', productoPedido);
      if (productoPedido != undefined) {
        let nuevoProductoPedido: ProductoPedido = productoPedido;
        this.pedido.productosPedido.push(nuevoProductoPedido);
        this.pedido.importeTotal += nuevoProductoPedido.importeTotalProductos;
      }
    });
    detalleProductoModal.present();
  }

  inicializarPedido() {
    this.pedido = {
      identificador: 0,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'nuevo',
      productosPedido: [],
      importeTotal: 0
    };
  }
}
