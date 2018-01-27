import { Descuento } from './../../model/Descuento';
import { ProductoPedido } from './../../model/ProductoPedido';
import { Producto } from './../../model/Producto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-producto-detalle',
  templateUrl: 'producto-detalle.html',
})
export class ProductoDetallePage {

  producto: Producto;
  cantidad: number = 1;
  importeSumaProductos: number;
  cantidadMensajesMapping: { [k: string]: string };
  descontarBote: boolean;
  descuentoAplicable: Descuento = {
    descripcion: "Entrega bote vacío",
    importe: 0.5,
    vecesQueAplica: 1
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController) {
    console.log('this.navParams.data', this.navParams.data);
    this.producto = this.navParams.data;
    this.importeSumaProductos = this.cantidad * this.producto.precio;
    this.cantidadMensajesMapping = {
      '=1': '# unidad',
      'other': '# unidades'
    };
    this.descontarBote = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoDetallePage');
  }

  actualizarImporte() {
    console.log("onChange - range");
    this.importeSumaProductos = this.cantidad * this.producto.precio;
  }

  descontarBoteVacio() {
    if (this.descontarBote) {
      this.importeSumaProductos = this.importeSumaProductos - this.descuentoAplicable.importe;
    }
    else {
      this.importeSumaProductos = this.importeSumaProductos + this.descuentoAplicable.importe;
    }
  }

  quitarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  sumarCantidad() {
    if (this.cantidad < this.producto.stock) {
      this.cantidad++;
    }
  }

  aceptar() {
    let productoPedido: ProductoPedido = {
      identificadorProducto: this.producto.identificador,
      identificadorPedido: 0,
      nombreProducto: this.producto.nombre,
      importeUnidad: this.producto.precio,
      importeTotalProductos: this.calcularImporteTotal(),
      cantidadPedida: this.cantidad,
      descuento: this.descuentoAplicable
    };
    this.viewCtrl.dismiss(productoPedido);
  }

  cancelar() {
    this.viewCtrl.dismiss(undefined);
  }
  private calcularImporteTotal(): number {
    let importeTotal = this.producto.precio * this.cantidad;
    if (this.descontarBote) {
      importeTotal = importeTotal - this.descuentoAplicable.importe * this.descuentoAplicable.vecesQueAplica;
    }
    return importeTotal;
  }

}
