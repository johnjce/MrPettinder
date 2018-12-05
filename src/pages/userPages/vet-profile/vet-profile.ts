import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatRoomPage } from '../../vetPages/chat-room/chat-room';


@Component({
  selector: 'page-vet-profile',
  templateUrl: 'vet-profile.html',
})
export class VetProfilePage {

  vet:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vet = this.navParams.data;
  }

  ionViewWillEnter() { 
    let elem = <HTMLElement>document.querySelector(".tabbar");
    if (elem != null) {
      elem.style.display = 'flex';
    }
  }
  goToChatRoom(){
    this.navCtrl.push(ChatRoomPage,  { "friend":this.vet });
  }

}
