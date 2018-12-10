import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
  product: any;


  constructor(public navParams: NavParams, 
    public navCtrl: NavController,
    private viewCtrl:ViewController) {
  		this.product = this.navParams.get('product');
  }
  
  dismiss() {
    let data;
    this.viewCtrl.dismiss(data);
  }
  
}
