import { Component } from '@angular/core';
import { UserProvider } from '../../../providers/user/user';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginPage } from '../login/login'
import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  user: any[] = [];
  dateOfBirth:Date;
  id: any;
  age: string;
  formCtrl: FormGroup;
  password: any;
  username: any;
  isLogged:boolean = false;
  avatar: string;

  constructor(formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider ) {
    this.id = navParams.data;
    if(this.id){
      this.getUser();
      this.isLogged=true;
    }
    this.formCtrl = formBuilder.group({
      name: ['', Validators.required],
      surname: [''],
      email: [''],
      dateOfBirth:[''],
      username: [''],
      password: ['']
    });
  }
  
  getUser() {
    return this.userProvider.getLoggedUser().subscribe(
      (data) => {
        this.user = data.profile;
        this.username = data.username;
        this.password = data.password;
        this.dateOfBirth = new Date(data.profile.dateOfBirth);
        this.age = this.getAge(this.dateOfBirth.toISOString());
        this.avatar = "https://loremflickr.com/320/240/girl/all";
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  save(){
    let dataOfUser = {
        'username':this.formCtrl.value.username,
        'password':this.formCtrl.value.password,
        'profile': {
          'name' : this.formCtrl.value.name,
          'surname' : this.formCtrl.value.surname,
          'email' : this.formCtrl.value.email,
          'dateOfBirth' : this.formCtrl.value.dateOfBirth
        }
      };
    if(this.isLogged){
      this.userProvider.updateUser(dataOfUser);
    } else {
      this.userProvider.setUser(dataOfUser).subscribe(
        (data) => {
          this.userProvider.login(this.formCtrl.value.username,this.formCtrl.value.password,"/users/");
          this.navCtrl.setRoot(TabsPage);
        },
        (error) =>{
          console.error(error);
        }
      );
    }
  }

  getAge(dateOfBirth){
    let currentTime = new Date().getTime();
    return ((currentTime - new Date(dateOfBirth).getTime())/31556952000).toFixed(0);
  }

  logout(){
    this.userProvider.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
