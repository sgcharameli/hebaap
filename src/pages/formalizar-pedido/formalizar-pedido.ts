import { Pedido } from './../../model/Pedido';
import { Direccion } from './../../model/Direccion';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DireccionesEntregaProvider } from '../../providers/direcciones-entrega/direcciones-entrega';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-formalizar-pedido',
  templateUrl: 'formalizar-pedido.html',
})
export class FormalizarPedidoPage {

  pedido: Pedido;
  direccionesEntrega: Direccion[];
  direccionEntregaSeleccionada: Direccion;
  cantidadPedidaMensajesMapping: { [k: string]: string };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private direccionesEntregaProvider: DireccionesEntregaProvider,
    private viewCtrl: ViewController) {
    this.direccionesEntrega = this.direccionesEntregaProvider.obtenerDireccionesEntrega();

    this.pedido = this.navParams.data;
    console.log('Formalizar pedido: ', this.pedido);
    this.cantidadPedidaMensajesMapping = {
      '=1': '# bote',
      'other': '# botes'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormalizarPedidoPage');
  }

  confirmar() {
    this.pedido.direccionEntrega = this.direccionEntregaSeleccionada;
    this.viewCtrl.dismiss(false);
  }

  cancelar() {
    this.viewCtrl.dismiss(undefined);
  }
}
