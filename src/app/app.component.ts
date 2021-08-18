import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Menu Inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ver Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Alterar Senha',
      url: '/usuario-alterar-senha',
      icon: 'key'
    },

    {
      title: 'Sair',
      url: '/login',
      icon: 'exit'
    },



  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
