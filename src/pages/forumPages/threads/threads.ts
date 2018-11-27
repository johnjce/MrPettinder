import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubforumsProvidersProvider } from '../../../providers/subforums/subforums';
import { CompleteThreadPage } from '../complete-thread/complete-thread';
import { ThreadCrudPage } from '../thread-crud/thread-crud';


@Component({
  selector: 'page-threads',
  templateUrl: 'threads.html',
})
export class ThreadsPage {
  id: number;
  threads: any[] = [];
  title:string="";
  description:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams, private threadsProvider: SubforumsProvidersProvider ) {
    this.id = navParams.data;
    this.getAllThreads();
  }

  getAllThreads() {
    return this.threadsProvider.getThreads(this.id).subscribe(
      (data) => {
        this.threads = data.threads;
        this.title = data.title;
        this.description = data.description;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  openItem(id:string) {
    this.navCtrl.push(CompleteThreadPage, id);
  }

  newThread() {
    this.navCtrl.push(ThreadCrudPage,this.id);
  }
}
