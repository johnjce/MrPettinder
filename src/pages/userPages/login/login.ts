import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

import { TabsPage } from '../../tabs/tabs';
import { HttpClient } from '@angular/common/http';

import { UserProvider } from '../../../providers/user/user';
import { UserProfilePage } from '../user-profile/user-profile'
import { User } from '../../../models/user';
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
  ionViewDidEnter() {
    let elem = <HTMLElement>document.querySelector(".tabbar");
    if (elem != null) {
      elem.style.display = 'none';
    }
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
    let isVet:boolean = (this.username.substr(0,3) == "vet");
    let ruta = '/users/';
    if(isVet){
      ruta = '/vets/name/';
    }
    this.userProvider.login(this.username, this.password, ruta)
    .subscribe(
      (data) => {
        loading.dismiss();
        this.userProvider.user = <User>{
          "username": data.username,
          "fullname": data.profile.name+" "+data.profile.surname,
          "email": data.profile.email,
          "avatar": "https://loremflickr.com/320/240/girl/all",
          "password": this.password
        };
        this.navCtrl.setRoot(TabsPage, isVet);
      },
      (error) =>{
        this.handleError(error);
        loading.dismiss();
        console.error(error);
      }
    );

  }

  register(){
    this.navCtrl.setRoot(UserProfilePage,false);
  }
}
