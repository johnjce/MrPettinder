import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatRoomPage } from '../../vetPages/chat-room/chat-room';
import { Friend } from '../../../models/user';


@Component({
  selector: 'page-vet-profile',
  templateUrl: 'vet-profile.html',
})
export class VetProfilePage {

  vet:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vet = this.navParams.data;
  }

  ionViewDidLoad() { }

  goToChatRoom(){
    this.navCtrl.push(ChatRoomPage,  { "friend":this.vet });
  }

}
