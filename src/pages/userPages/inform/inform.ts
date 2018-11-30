import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.owner=this.navParams.data.name.first;
    this.pet=this.navParams.data.name.last;
    let user = {
      "username": this.navParams.data.name.first,
      "avatar": "https://loremflickr.com/320/240/girl/all",
      "profile":"s",
      "available":false
    }
    this.user = user;
  }

  goToChatRoom() {
    let friend = this.user;
    this.navCtrl.push(ChatRoomPage, { friend });
  }
}
