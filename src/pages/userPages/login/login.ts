import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { TabsPage } from '../../tabs/tabs';
import { HttpClient } from '@angular/common/http';

import { UserProvider } from '../../../providers/user/user';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string='user';
  password:string='password';
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient, 
              public loadingCtrl: LoadingController,
              private readonly toastCtrl: ToastController,
              private userProvider: UserProvider) {
  }

  handleError(error: any) {
    let message: string;
	    if (error.status && error.status === 401) {
        message = "User o password invalid, please check";
      } else {
        message = `An unexpected error occured, please check. Error message: ${error.statusText}`;
      }

    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'center'
    });

    toast.present();
  }

  login(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.userProvider.login(this.username, this.password)
    .subscribe(
      (data) => {
        loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
      },
      (error) =>{
        this.handleError(error);
        loading.dismiss();
        console.error(error);
      }
    );

  }
}
