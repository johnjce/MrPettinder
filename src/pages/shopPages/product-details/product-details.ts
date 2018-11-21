import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  product: any;


  constructor(public navParams: NavParams, public navCtrl: NavController) {
  		this.product = this.navParams.get('product');
  		console.log(this.product);
  }
  
}
