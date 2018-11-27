import {Component, ViewChild} from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})

export class ChatRoomPage {

  @ViewChild(Content) content: Content;

  userName: string = '';
  message: string = '';
  messages: object[] = [];
  _chatSubscription; //FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fireDb: AngularFireDatabase) {
    this.userName = this.navParams.get('userName');/*
    this._chatSubscription = this.fireDb.list('chat').subscribe(data => {
      this.messages = data;
      // data.map(elem => {
      //   this.messages.push(elem);
      // })
      setTimeout(() => {
        this.scrollToBottom();
      },300)
    })*/
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ChatPage');
    this.fireDb.list('/chat').push({
      specialMessage: true,
      message: `${this.userName} has joined the room`
    })
  }

  ionViewWillLeave() {
    this._chatSubscription.unsubscribe();
    this.fireDb.list('/chat').push({
      specialMessage: true,
      message: `${this.userName} has left the room`
    })
    this.scrollToBottom();
  }

  sendMessage() {/*
    if ( this.message !== null && this.message !== "") {
      this.fireDb.list('/chat').push({
        userName: this.userName,
        message: this.message
      }).then(() => {
        this.scrollToBottom();
      }).catch(() => {

      })
    }
    this.message = '';*/
  }

  scrollToBottom() {
    this.content.scrollToBottom(100);
  }

}