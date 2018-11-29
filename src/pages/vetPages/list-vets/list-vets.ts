import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, ToastController} from 'ionic-angular';
import {HttpProvider} from "../../../providers/http/http";
import {Friend} from "../../../models/user";
import {UserProvider} from '../../../providers/user/user';
import { ChatRoomPage } from '../chat-room/chat-room';

import { ModalController } from 'ionic-angular';
import { YourTimePage } from '../../userPages/your-time/your-time';

@Component({
  selector: 'page-list-vets',
  templateUrl: 'list-vets.html',
})

export class ListVetsPage {

  veterinariansChat: any[] = [];
  timeAvailable: any;

  constructor(public menuCtrl: MenuController, 
    public http:HttpProvider, 
    public navCtrl:NavController, 
    public userProvider:UserProvider,
    public navParams:NavParams,
    public modalCtrl: ModalController  ) {}

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    this.getAllVets();
    this.timeAvailable = this.userProvider.getTimeAvailable();
  }

  goToChatRoom(friend: Friend) {
    this.navCtrl.push(ChatRoomPage, {friend});
  }

  payMinutes(){
      this.presentTimeModal();
  }

  presentTimeModal() {
    let timeModal = this.modalCtrl.create(YourTimePage, { time:this.timeAvailable });
    timeModal.onDidDismiss(data => {
      console.log(data);
    });
    timeModal.present();
  }
 

  getAllVets() {
    this.userProvider.getVeterinarians().subscribe(
      (data) => {
        data.forEach(vet => {
          let vete = {"username":vet.username,"name":vet.profile.name,"avatar": "Raouf.png"};
          this.veterinariansChat.push(vete);
        });
      },
      (error) =>{
        console.error(error);
      }
      );
    }
}