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
  ionViewWillEnter() { 
    let elem = <HTMLElement>document.querySelector(".tabbar");
    if (elem != null) {
      elem.style.display = 'flex';
    }
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

  goToChatRoom() {
    let friend = this.user;
    this.navCtrl.push(ChatRoomPage, { friend });
  }
}
