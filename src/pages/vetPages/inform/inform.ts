import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatRoomPage } from '../../vetPages/chat-room/chat-room';
import { Friend } from '../../../models/user';
import { MessageMocks } from '../../../mocks/messageMocks';

@Component({
  selector: 'page-inform',
  templateUrl: 'inform.html',
  
})
export class InformPage {
  owner;
  pet;
  user: Friend;
  inform: any;
  diagnostic: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public mocks: MessageMocks) {
    this.getInform();
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

  saveInform(){
    this.mocks.informSave(this.diagnostic);
    console.log(this.diagnostic);
    return true;
  }
  getInform(){
    this.inform = this.mocks.getInform();
  }
}
