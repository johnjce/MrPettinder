import { CartService } from '../../../providers/shop/cart';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
 
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
    private viewCtrl:ViewController) { 
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
    console.log(this.selectedItems);
  }
 
  dismiss() {
    let data = { '': '' };
    this.viewCtrl.dismiss(data);
  }
}