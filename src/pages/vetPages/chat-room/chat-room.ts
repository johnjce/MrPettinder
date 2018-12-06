import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Friend, User} from "../../../models/user";
import {HttpProvider} from "../../../providers/http/http";
import {forkJoin} from 'rxjs/observable/forkJoin';
import { MessageMocks } from "../../../mocks/messageMocks";
import { Message } from "../../../models/message";
import { Content } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';

@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})

export class ChatRoomPage {

  @ViewChild(Content) content: Content;
  private friend:Friend = new Friend();
  private myProfile:User = new User();
  private input: string = '';

  constructor(public msgMocks:MessageMocks, 
    public http:HttpProvider, 
    public navCtrl:NavController, 
    public navParams:NavParams,
    private userProvider:UserProvider,
    private viewCtrl:ViewController ) {  
      this.scrollToBottom();
    }

  ionViewDidLoad() {
    this.msgMocks.items;
    this.friend = this.navParams.get('friend');
    forkJoin(
      this.userProvider.getLoggedUser()
    ).subscribe(([profile]) => {
      let prof = {
        "username": profile.username,
        "password": profile.password,
        "fullname": profile.profile.name+" "+profile.profile.surname,
        "avatar": "https://loremflickr.com/320/240/girl/all",
        "email": profile.profile.email
      }
      this.myProfile = <User>prof;
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom(300);
    });
  }

  doSend() {
    if(this.input.length > 0) {
      let message: Message = new Message();
      message.to = this.friend.username;
      message.from = this.myProfile.username;
      message.content = this.input;
      this.msgMocks.add(message);
      this.input = '';
      this.scrollToBottom();
    }
  }

  dismiss() {
    let data = { '': '' };
    this.viewCtrl.dismiss(data);
  }
  
}