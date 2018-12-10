import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ModalController, Content } from 'ionic-angular';
import { ChatRoomPage } from '../../vetPages/chat-room/chat-room';
import { Friend } from '../../../models/user';
import { MessageMocks } from '../../../mocks/messageMocks';
import {  } from 'ionic-angular';

@Component({
  selector: 'page-inform',
  templateUrl: 'inform.html',
  
})
export class InformPage {
  @ViewChild(Content) content: Content;
  owner;
  pet;
  user: Friend;
  inform: any;
  diagnostic: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController, 
    public mocks: MessageMocks) {
    this.getInform();
  }
  
  ionViewDidLoad() {
    this.owner=this.navParams.data.profile.name;
    this.pet=this.navParams.data.pets[0].name;
    let user = {
      "username": this.navParams.data.username,
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
    this.getInform();
    this.diagnostic = "";
    this.content.resize();
  }
  getInform(){
    this.inform = this.mocks.getInform();
  }

}
