import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, ToastController} from 'ionic-angular';
import {HttpProvider} from "../../../providers/http/http";
import {Friend} from "../../../models/user";
import {UserProvider} from '../../../providers/user/user';
import { ChatRoomPage } from '../chat-room/chat-room';

import { ModalController } from 'ionic-angular';
import { YourTimePage } from '../../userPages/your-time/your-time';
import { VetProfilePage } from '../../userPages/vet-profile/vet-profile';

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

  
  payMinutes(){
    this.presentTimeModal();
  }
  
  presentTimeModal() {
    let timeModal = this.modalCtrl.create(YourTimePage, { time:this.timeAvailable });
    timeModal.onDidDismiss(data => {
      console.error(data);
    });
    timeModal.present();
  }
  
  
  getAllVets() {
    this.userProvider.getVeterinarians().subscribe(
      (data) => {
        let i = 0;
        data.forEach(vet => {
          let vete = {"username":vet.username,"name":vet.profile.name,"avatar": "https://loremflickr.com/g/320/240/men,girl/all?random="+i,"expert":"Exotic and common pets"};
          this.veterinariansChat.push(vete);
          i = i+1;
        });
      },
      (error) =>{
        console.error(error);
      }
      );
    }
    
    goToVetProfilePage(friend){
      this.navCtrl.push(VetProfilePage, friend);
    }
    
    goToChatRoom(friend: Friend) {
      this.navCtrl.push(ChatRoomPage, {friend});
    }
}