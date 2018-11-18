import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-new',
  templateUrl: 'add-new.html'
})
export class AddNewPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  product: any;
  constructor(public viewController: ViewController, public navCtrl: NavController) {
  	this.product = {name: undefined, price: undefined, description: undefined, imageURL: undefined};
  }

  cancel(){
  	this.viewController.dismiss();
  }

  submit(product: any){
  	this.viewController.dismiss({product: product});
  }
  
}
