import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ChatRoomPage } from '../../vetPages/chat-room/chat-room';


@Component({
  selector: 'page-vet-profile',
  templateUrl: 'vet-profile.html',
})
export class VetProfilePage {

  vet:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.vet = this.navParams.data;
  }

  goToChatRoom(){
    this.presentChatModal();
  }
  presentChatModal() {
    let chatModal = this.modalCtrl.create(ChatRoomPage,   { "friend":this.vet });
    chatModal.onDidDismiss(data => {
      console.error(data);
    });
    chatModal.present();
  }
}
