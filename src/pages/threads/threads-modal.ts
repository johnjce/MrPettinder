import { ThreadsService } from '../../providers/threads-service';
import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController, ToastController, NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './threads-modal.html'
})
export class ThreadsModalPage {
  @ViewChild('name') name;
  threads: any = {};
  error: any;

  constructor(public threadsService: ThreadsService,
              public params: NavParams,
              public viewCtrl: ViewController,
              public toastCtrl: ToastController,
              public navCtrl: NavController) {
    if (this.params.data.id) {
      this.threadsService.get(this.params.get('id')).subscribe((threads: any) => {
        this.threads = threads;
      });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save(form: NgForm) {
    let update: boolean = form['href'];
    this.threadsService.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Threads "' + form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
        duration: 2000
      });
      toast.present();
      this.dismiss();
    }, error => this.error = error)
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.name.setFocus();
    },150);
  }
}
