import { FormalizarPedidoPageModule } from './../pages/formalizar-pedido/formalizar-pedido.module';
import { ProductoDetallePageModule } from './../pages/producto-detalle/producto-detalle.module';
import { ProductoDetallePage } from './../pages/producto-detalle/producto-detalle';
import { ConfiguracionPageModule } from './../pages/configuracion/configuracion.module';
import { PedidosPageModule } from './../pages/pedidos/pedidos.module';
import { InformacionPageModule } from './../pages/informacion/informacion.module';
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
import { PedidosProvider } from '../providers/pedidos/pedidos';
import { LoginPageModule } from '../pages/login/login.module';
import { NuevoPedidoPageModule } from '../pages/nuevo-pedido/nuevo-pedido.module';
import { FormalizarPedidoPage } from '../pages/formalizar-pedido/formalizar-pedido';
import { DireccionesEntregaProvider } from '../providers/direcciones-entrega/direcciones-entrega';


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
    HomePage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    NuevoPedidoPageModule,
    InformacionPageModule,
    PedidosPageModule,
    ConfiguracionPageModule,
    ProductoDetallePageModule,
    FormalizarPedidoPageModule,
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
    ConfiguracionPage,
    ProductoDetallePage,
    FormalizarPedidoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductosProvider,
    PedidosProvider,
    DireccionesEntregaProvider
  ]
})

export class AppModule { }
