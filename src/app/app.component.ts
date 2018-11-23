import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/userPages/login/login';
import { ApiurlProvider } from '../providers/apiurl/apiurl';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "";
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private apiurlProvider:ApiurlProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    if(this.apiurlProvider.getAutorization() == ''){
      this.rootPage = LoginPage;
    }else{
      this.rootPage = TabsPage;
    }
  }

}
