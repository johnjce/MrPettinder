import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {

  constructor(public navCtrl: NavController) {

  }

  pageDetail(){
    this.navCtrl.push('DetailPage');
  }

}
