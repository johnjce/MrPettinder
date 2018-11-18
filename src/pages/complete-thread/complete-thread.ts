import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompleteThreadProvider } from '../../providers/complete-thread/complete-thread';


@Component({
selector: 'page-complete-thread',
templateUrl: 'complete-thread.html',
})
export class CompleteThreadPage {
  id: number;
  completeThread: any[] = [];
  title:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private completeThreadProvider: CompleteThreadProvider) {
      this.id = navParams.data;
      this.getThread();
  }

  getThread() {
    return this.completeThreadProvider.getThread(this.id).subscribe(
      (data) => {
        this.completeThread = data.messages;
        this.title = data.title;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

}

