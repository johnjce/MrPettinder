import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {UserProvider} from '../../../providers/user/user';
import { ChatRoomPage } from '../chat-room/chat-room';

@Component({
  selector: 'page-list-vets',
  templateUrl: 'list-vets.html',
})



export class ListVetsPage {
  veterinarians:any;
  timeAvailable:any;

  constructor(public navCtrl: NavController, 
    private readonly toastCtrl: ToastController, 
    private userProvider: UserProvider ) {
    this.getAllVets();
    this.timeAvailable = this.userProvider.getTimeAvailable();
  }

  getAllVets() {
    this.userProvider.getVeterinarians().subscribe(
      (data) => {
        this.veterinarians = data;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  openItem(vet: any) {
    this.navCtrl.push(ChatRoomPage, {vet});
  }

  payMinutes(){
    let message: string =this.timeAvailable + ' minutes availables, (call to pay method)';
    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'center'
    });

    toast.present();
  }
}
