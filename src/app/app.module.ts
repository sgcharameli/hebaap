import { LoginPage } from './../pages/login/login';
import { NuevoPedidoPage } from './../pages/nuevo-pedido/nuevo-pedido';
import { PedidosPage } from './../pages/pedidos/pedidos';
import { InformacionPage } from './../pages/informacion/informacion';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProductosProvider } from '../providers/productos/productos';
import { HttpClientModule } from '@angular/common/http';


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAv8Q9S-iVhmPen52EsxdjliX0VEMjh_wA",
  authDomain: "hebaap-1ae25.firebaseapp.com",
  databaseURL: "https://hebaap-1ae25.firebaseio.com",
  projectId: "hebaap-1ae25",
  storageBucket: "hebaap-1ae25.appspot.com",
  messagingSenderId: "367799181596"
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NuevoPedidoPage,
    InformacionPage,
    PedidosPage,
    HomePage,
    ConfiguracionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NuevoPedidoPage,
    InformacionPage,
    PedidosPage,
    HomePage,
    ConfiguracionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductosProvider
  ]
})

export class AppModule { }
