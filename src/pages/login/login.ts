import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider) {
  }

  ngOnInit() {
    this.formularioLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn() {
    if (!this.formularioLogin.valid) {
      console.error('Error. Formulario inválido: ', this.formularioLogin.value);
    } else {
      this.authProvider.logInWithEmailAndPassword(this.formularioLogin.value.email, this.formularioLogin.value.password)
      .then(
        authDatos => {
          console.log('usuario logado: ', authDatos);
          this.navCtrl.setRoot(HomePage);
        }
      );
    }
    
  }
}
