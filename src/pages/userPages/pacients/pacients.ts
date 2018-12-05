import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';
import { InformPage } from '../inform/inform';

@Component({
  selector: 'page-pacients',
  templateUrl: 'pacients.html',
})
export class PacientsPage {
  users: JSON[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userProvider:UserProvider) {
      
    }

  ionViewDidLoad() {
    this.loadUsers();
  }

  loadUsers(){
    this.userProvider.getUsers().subscribe(
      (data) => {
        console.log(data);
          this.users = data;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  goToInform(friend){
    this.navCtrl.push(InformPage, friend);
  }
}
