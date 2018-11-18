import { Component } from '@angular/core';
import { UserProvider } from '../../providers/user/user';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  user: any[] = [];
  dateOfBirth:string;
  id: number;
  age: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider ) {
    this.id = navParams.data;
    this.getUser();
  }
  getUser() {
    return this.userProvider.getUser(this.id).subscribe(
      (data) => {
        this.user = data.profile;
        this.dateOfBirth = new Date(data.profile.dateOfBirth).toISOString();
        this.age = this.getAge(this.dateOfBirth);
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  reset(){
  }
  save(){
  }

  getAge(dateOfBirth){
    let currentTime = new Date().getTime();
    return ((currentTime - new Date(dateOfBirth).getTime())/31556952000).toFixed(0);
  }
}
