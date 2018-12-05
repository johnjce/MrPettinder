import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-your-time',
  templateUrl: 'your-time.html',
})
export class YourTimePage {
  character;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController,
              private readonly toastCtrl: ToastController) {
              var characters = [
      {
        timeAvailable: this.navParams.get('time') + ' minutes availables',
        quote: 'If you need more time, you can get it here!',
        image: 'assets/imgs/avatar.PNG',
        items: [
          { price: '5€', time: '10 min' },
          { price: '7€', time: '15 min' },
          { price: '9€', time: '20 min' },
          { price: '13€', time: '30 min' }
        ]
      }
    ];
    this.character = characters[0];
  }

  ionViewDidLoad() {
  }
  showPayMethod(){
    let message: string =this.navParams.get('time') + ' minutes availables, (call to pay method)';
    const toast = this.toastCtrl.create(
      {
        message,
        duration: 5000,
        position: 'center'
      }
    );
    toast.present();
  }
  dismiss() {
    let data = { '': '' };
    this.viewCtrl.dismiss(data);
  }

}
