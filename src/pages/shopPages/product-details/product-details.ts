import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
  product: any;


  constructor(public navParams: NavParams, public navCtrl: NavController) {
  		this.product = this.navParams.get('product');
  }
  
}
