import { FormalizarPedidoPage } from './../formalizar-pedido/formalizar-pedido';
import { ProductoPedido } from './../../model/ProductoPedido';
import { ProductoDetallePage } from './../producto-detalle/producto-detalle';
import { Pedido } from './../../model/Pedido';
import { ProductosProvider } from './../../providers/productos/productos';
import { Producto } from './../../model/Producto';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

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
    private modalCtrl: ModalController,
    private toastCtrl: ToastController) {
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
      usuario: 'a@gmail.com',
      identificador: 0,
      fechaPedido: new Date(),
      fechaPrevistaEntrega: new Date(),
      fechaEntrega: new Date(),
      estado: 'nuevo',
      productosPedido: [],
      importeTotal: 0
    };
  }

  formalizarPedido() {
    let formalizarPedidoModal = this.modalCtrl.create(FormalizarPedidoPage, this.pedido);
    // Gestionar con observable en función aparte
    formalizarPedidoModal.onDidDismiss(error => {
      if (error === undefined) {
        console.log('Cancelado por el usuario');
        let toast = this.toastCtrl.create({
          message: 'Pedido guardado para más adelante',
          duration: 2000,
          position: 'bottom'
        });
        toast.present(toast);
      }
      if (error !== undefined && !error) {
        console.log('OK. Ir a mis pedidos');
        this.inicializarPedido();
        let toast = this.toastCtrl.create({
          message: 'Pedido realizado correctamente',
          duration: 2000,
          position: 'bottom'
        });
        toast.present(toast);
      }
      if (error !== undefined && error) {
        console.log('Gestionar error');
        let toast = this.toastCtrl.create({
          message: 'Ha ocurrido un error, inténtelo más adelante',
          duration: 2000,
          position: 'bottom'
        });
        toast.present(toast);
      }


    });
    formalizarPedidoModal.present();
  }
}
