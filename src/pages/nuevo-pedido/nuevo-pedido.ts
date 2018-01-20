import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-nuevo-pedido',
  templateUrl: 'nuevo-pedido.html',
})
export class NuevoPedidoPage {

  constructor(public navCtrl: NavController, 
    private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoPedidoPage');
  }

}
