import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatRoomPage } from '../../vetPages/chat-room/chat-room';
import { User, Friend } from '../../../models/user';

@Component({
  selector: 'page-inform',
  templateUrl: 'inform.html',
  
})
export class InformPage {
  owner;
  pet;
  user: Friend;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  
  ionViewDidLoad() {
    this.owner=this.navParams.data.username;
    this.pet=this.navParams.data.petName;
    let user = {
      "username": this.owner,
      "avatar": "https://loremflickr.com/320/240/girl/all",
      "profile":this.navParams.data.profile,
      "available":false
    }
    this.user = user;
  }

  goToChatRoom(){
    this.presentChatModal();
  }
  presentChatModal() {
    let chatModal = this.modalCtrl.create(ChatRoomPage,   { "friend":this.user });
    chatModal.onDidDismiss(data => {
      console.error(data);
    });
    chatModal.present();
  }
}
