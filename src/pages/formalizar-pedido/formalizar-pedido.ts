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

  direccionesEntrega: Direccion[];
  direccionEntregaSeleccionada: Direccion;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private direccionesEntregaProvider: DireccionesEntregaProvider,
    private viewCtrl: ViewController) {
    this.direccionesEntrega = this.direccionesEntregaProvider.obtenerDireccionesEntrega();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormalizarPedidoPage');
  }

  confirmar() {
    this.viewCtrl.dismiss(false);
  }

  cancelar() {
    this.viewCtrl.dismiss(undefined);
  }
}
