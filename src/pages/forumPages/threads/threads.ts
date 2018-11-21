import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThreadsProvider } from '../../../providers/threads/threads';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, private threadsProvider: ThreadsProvider ) {
    this.id = navParams.data;
    this.getAllThreads();
  }

  getAllThreads() {
    return this.threadsProvider.getThreads(this.id).subscribe(
      (data) => {
        this.threads = data.threads;
        this.title = data.title;
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
