import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import { ThreadsService } from '../../providers/threads-service';
import { ThreadsModalPage } from './threads-modal';

@IonicPage()
@Component({
  selector: 'page-threads',
  templateUrl: 'threads.html',
})
export class ThreadsPage {
  private threadss: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public threadsService: ThreadsService, 
              public modalCtrl: ModalController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.threadsService.getGoodThreadss().subscribe(threadss => {
      this.threadss = threadss;
    })
  }

  openModal(threadsId) {
    let modal = this.modalCtrl.create(ThreadsModalPage, threadsId);
    modal.present();
    // refresh data after modal dismissed
    modal.onDidDismiss(() => this.ionViewDidLoad())
  }

  remove(threads) {
    this.threadsService.remove(threads.id).subscribe(response => {
      for (let i = 0; i < this.threadss.length; i++) {
        if (this.threadss[i] === threads) {
          this.threadss.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'Threads "' + threads.name + '" deleted.',
            duration: 2000,
            position: 'top'
          });
          toast.present();
        }
      }
    });
  }
}
