import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-pay-method',
  templateUrl: 'pay-method.html',
})
export class PayMethodPage {
  total:number;
  constructor(public navCtrl: NavController,
    private viewCtrl:ViewController,
     public navParams: NavParams) {
    this.total = navParams.data.total;
  }

  ionViewDidLoad() {
  }

  dismiss() {
    let data=true;
    this.viewCtrl.dismiss(data);
  }

}
