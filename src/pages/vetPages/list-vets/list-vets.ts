import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, ToastController} from 'ionic-angular';
import {HttpProvider} from "../../../providers/http/http";
import {Friend} from "../../../models/user";
import {UserProvider} from '../../../providers/user/user';
import { ChatRoomPage } from '../chat-room/chat-room';


@Component({
  selector: 'page-list-vets',
  templateUrl: 'list-vets.html',
})

export class ListVetsPage {

  veterinariansChat: Friend[] = [];
  timeAvailable: any;
  veterinarians: any;

  constructor(public menuCtrl: MenuController, 
    public http:HttpProvider, 
    public navCtrl:NavController, 
    public userProvider:UserProvider,
    public navParams:NavParams,
    private readonly toastCtrl: ToastController  ) {
      this.getAllVets();
      this.timeAvailable = this.userProvider.getTimeAvailable();
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
    this.http.get('friends.json').subscribe((friends) => {
      this.veterinariansChat = <Friend[]>friends;
    }, (err) => {
      console.error(err);
    });
  }

  goToProfileFriend(sliding, friend: Friend) {
    sliding.close();
  }

  goToChatRoom(friend: Friend) {
    this.navCtrl.push(ChatRoomPage, {friend});
  }

  payMinutes(){
    let message: string =this.timeAvailable + ' minutes availables, (call to pay method)';
    const toast = this.toastCtrl.create(
      {
        message,
        duration: 5000,
        position: 'center'
      }
    );

  }

  getAllVets() {
    this.userProvider.getVeterinarians().subscribe(
      (data) => {
        this.veterinarians = data;
      },
      (error) =>{
        console.error(error);
      }
      );
    }
}