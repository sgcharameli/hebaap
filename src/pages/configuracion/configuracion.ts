import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfiguracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracion',
  templateUrl: 'configuracion.html',
})
export class ConfiguracionPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracionPage');
  }

  logOut() {
    console.log('ConfiguracionPage logging Out');
    this.authProvider.logOut();
  }
}
