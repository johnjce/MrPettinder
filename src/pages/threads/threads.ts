import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import { ThreadsService } from '../../providers/threads-service';
import { ThreadsModalPage } from './threads-modal';
import {ComponenteEduComponent} from '../../components/componente-edu/componente-edu'
@IonicPage()
@Component({
  selector: 'page-threads',
  templateUrl: 'threads.html',
})
export class ThreadsPage {
  private threadss: Array<any>;



<<<<<<< HEAD
=======
  /***
   * 1. Creas con ionic generate component [NOMBRE]
   * 2. En el "module" de cada page añades el component
   * 3. en el html del page "invocas" al componenete <componenete-edu>
   * 
   * 
   * --- En el componenete /componenent/componenente-edu
   * 1. Si quieres RECIBIR info creas una variable con @input
   * 2. Bindeas y ya
   */

>>>>>>> appGS1/master
  VariabledeEduConTodainfromacion:any=[
    {"id":1, "titulo":"pepito", "descripcion": "blablabla", "endTime":"25 Julio 2018"},
    {"id":2, "titulo":"pepito1", "descripcion": "blabla12134bla", "endTime":"25 Julio 2018"},
    {"id":3, "titulo":"pepito2", "descripcion": "blablabdadala", "endTime":"25 Julio 2018"},
    {"id":14, "titulo":"pepit3o", "descripcion": "blablarakjybla", "endTime":"25 Julio 2018"},
    {"id":156, "titulo":"pepito4", "descripcion": "blabladadabla", "endTime":"25 Julio 2018"}
  ];

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
