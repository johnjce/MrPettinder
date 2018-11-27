import {Component, ViewChild} from '@angular/core';
import { Content } from 'ionic-angular';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})

export class ChatRoomPage {
  @ViewChild(Content) content: Content;
  private friend;
  private myProfile;
  private isLoading;
  private messages;
  constructor(public http: HttpClient, public navCtrl:NavController, public navParams:NavParams) {

  }

  ionViewDidLoad() {
    this.isLoading = true;
   // this.messages = this.msgMocks.items;
    this.friend = this.navParams.get('friend');
    forkJoin(
      this.http.get('my-profile.json')
    ).subscribe(([profile]) => {
      this.isLoading = false;
      this.myProfile = <any>profile;
    });
  }

  ionViewWillEnter(): void {
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    });
  }


  doSend() {/*
    if(this.input.length > 0) {
      let message: Message = new Message();
      message.to = this.friend.username;
      message.from = 'me';
      message.content = this.input;
      this.msgMocks.add(message);
      this.scrollToBottom();
      this.input = '';
    }*/
  }

}
