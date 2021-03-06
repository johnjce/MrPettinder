import { CartService } from '../../../providers/shop/cart';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { PayMethodPage } from '../pay-method/pay-method';
@Component({
    selector: 'page-cart',
    templateUrl: 'cart.html',
  })
export class CartPage  {
 
  selectedItems = [];
 
  total = 0;
 
  constructor(private cartService: CartService,
              public navCtrl:NavController, 
              public navParams:NavParams,
              public modalCtrl: ModalController, 
              private viewCtrl:ViewController) { 

    this.refreshCart();
  }
 
  private refreshCart() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      }
      else {
        selected[obj.id] = { ...obj, count: 1 };
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key]);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

  dismiss() {
    let data;
    this.viewCtrl.dismiss(data);
  }
  
  addProduct(product){
    this.cartService.addProduct(product);
    this.refreshCart();
  }

  removeProduct(id:number){
    this.cartService.removeProduc(id);
    this.refreshCart();
  }

  goToPayPage(){
      let payModal = this.modalCtrl.create(PayMethodPage,{total: this.total});
      payModal.onDidDismiss(data => {
      });
      payModal.present();
  }
}