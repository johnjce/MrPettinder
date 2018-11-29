import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubforumsProvidersProvider } from '../../../providers/subforums/subforums';
import { ThreadsPage } from '../threads/threads';
import { UserProfilePage } from '../../userPages/user-profile/user-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subforums: any[] = [];
  grid = true;

  constructor(public navCtrl: NavController, private subforumsProvider: SubforumsProvidersProvider ) {
     this.getAllSubforums();
  }
  changeGrid(){
    this.grid = !this.grid;
  }
  getUrlImage(){
    this.subforumsProvider.getImage().subscribe(
      (data) => {
        return data;
      },
      (error) =>{
        console.error(error);
      }
    );
  }
  getAllSubforums() {
    return this.subforumsProvider.list().subscribe(
      (data) => {
        this.subforums = data;
      },
      (error) =>{
        console.error(error);
      }
    );
  }


  openThreads(id:string) {
    this.navCtrl.push(ThreadsPage, id);
  }

  openProfile() {
    this.navCtrl.push(UserProfilePage);
  }
}
