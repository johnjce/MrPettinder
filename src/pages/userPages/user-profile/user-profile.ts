import { Component } from '@angular/core';
import { UserProvider } from '../../../providers/user/user';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginPage } from '../login/login'

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  user: any[] = [];
  dateOfBirth:string;
  id: number;
  age: string;
  form: FormGroup;
  isReadyToSave:any;

  constructor(formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private userProvider: UserProvider ) {
    this.id = navParams.data;
    this.getUser();
    this.form = formBuilder.group({
      name: ['', Validators.required],
      surname: [''],
      email: [''],
      dateOfBirth:['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
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

  save(){
    let dataOfUser = {
      'name' : this.form.value.name,
      'surname' : this.form.value.surname,
      'email' : this.form.value.email,
      'dateOfBirth' : this.form.value.dateOfBirth
      };
    this.userProvider.setUser(dataOfUser).subscribe(
      (data) => {
        console.log("info:" + data);
      },
      (error) =>{
        console.error("error:" + error);
      });
    
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
