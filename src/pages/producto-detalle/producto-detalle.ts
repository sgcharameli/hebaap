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
  cantidad: number;
  importeSumaProductos: number;
  cantidadMensajesMapping: { [k: string]: string };
  cantidadBotesMensajesMapping: { [k: string]: string };
  botesDevueltos: number;
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
    this.cantidad = 1;
    this.botesDevueltos = 0;
    this.importeSumaProductos = this.cantidad * this.producto.precio;
    this.cantidadMensajesMapping = {
      '=1': '# unidad',
      'other': '# unidades'
    };
    this.cantidadBotesMensajesMapping = {
      '=0': 'No entregaré ningún bote vacío al recoger el encargo',
      '=1': 'Entregaré un bote vacío al recoger el encargo',
      'other': 'Entregaré # botes vacíos al recoger el encargo'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoDetallePage');
  }

  actualizarImporte() {
    console.log("onChange - actualizarImporte - range");
    this.importeSumaProductos = this.calcularImporteTotal();
  }

  actualizarCantidades() {
    console.log("onChange - actualizarCantidades - range");
    if (this.cantidad < this.botesDevueltos) {
      this.botesDevueltos = this.cantidad;
    }
    this.importeSumaProductos = this.calcularImporteTotal();
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

  quitarCantidadBotes() {
    if (this.botesDevueltos > 0) {
      this.botesDevueltos--;
    }
  }

  sumarCantidadBotes() {
    if (this.botesDevueltos < this.cantidad) {
      this.botesDevueltos++;
      this.actualizarImporte(); //Bugfix - La primera vez no ejecuta el onChange del range
    }
  }

  aceptar() {
    let productoPedido: ProductoPedido = {
      identificadorProducto: this.producto.identificador,
      identificadorPedido: 0,
      nombreProducto: this.producto.nombre,
      importeUnidad: this.producto.precio,
      miniatura: this.producto.miniatura,
      importeTotalProductos: this.calcularImporteTotal(),
      cantidadPedida: this.cantidad,
      descuento: this.calcularDescuentos()
    };
    this.viewCtrl.dismiss(productoPedido);
  }

  cancelar() {
    this.viewCtrl.dismiss(undefined);
  }

  private calcularImporteTotal(): number {
    return this.producto.precio * this.cantidad - this.descuentoAplicable.importe * this.botesDevueltos;
  }

  private calcularDescuentos(): Descuento {
    if (this.botesDevueltos > 0) {
      return {
        descripcion: this.descuentoAplicable.descripcion,
        importe: this.descuentoAplicable.importe,
        vecesQueAplica: this.botesDevueltos
      };
    }
    return undefined;
  }

}
