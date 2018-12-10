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
  available:boolean=false;
  me: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public userProvider:UserProvider) {
      this.available = this.getState();
    }

  ionViewDidLoad() {
    this.loadUsers();
  }

  loadUsers(){
    this.userProvider.getUsers().subscribe(
      (data) => {
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

  changeAvailability(){
    this.me.available = !this.me.available;
    this.userProvider.updateVet(this.me).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
    
  }

  getState():any{
    this.userProvider.getLoggedUser().subscribe(
      (data) => {
        this.me = data;
        return data.available;
      },
      (error) =>{
        console.error(error);
      }
    );
  }
}
