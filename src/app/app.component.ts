import { ConfiguracionPage } from './../pages/configuracion/configuracion';
import { HomePage } from './../pages/home/home';
import { AuthProvider } from './../providers/auth/auth';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private authProvider: AuthProvider) {

      this.pages = [
        { title: 'Inicio', component: HomePage },
        { title: 'Configuración', component: ConfiguracionPage }
      ];
      this.initializeApp();
    }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.authProvider.session.subscribe(session => {
        console.log('app.component:authProvider:subscribe:session:', session);
        if (session) {
          this.rootPage = HomePage;
        }
        else {
          this.rootPage = LoginPage;
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut() {

  }
}
