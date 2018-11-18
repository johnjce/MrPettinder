import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SubforumsProvidersProvider } from '../../providers/subforums/subforums';
import { ThreadsPage } from '../threads/threads';
import { UserProfilePage } from '../user-profile/user-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subforums: any[] = [];

  constructor(public navCtrl: NavController, private subforumsProvider: SubforumsProvidersProvider ) {
     this.getAllSubforums();
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

  openProfile(id:string) {
    this.navCtrl.push(UserProfilePage, id);
  }
}
