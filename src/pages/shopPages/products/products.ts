import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CartService } from '../../../providers/shop/cart';
import { CartPage } from '../cart/cart';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { ProductDetailsPage } from '../product-details/product-details';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  @ViewChild(Slides) slides: Slides;
  cart = [];
  items = [];
  constructor(public navCtrl: NavController, 
    public modalCtrl: ModalController, 
    private cartService: CartService) {

    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  readMore(product) {
    let cartModal = this.modalCtrl.create(ProductDetailsPage, { product });
    cartModal.onDidDismiss(data => {
      console.error(data);
    });
    cartModal.present();
  }

  openCart() {
    let cartModal = this.modalCtrl.create(CartPage);
    cartModal.onDidDismiss(data => {
      console.error(data);
    });
    cartModal.present();
  }

  
}

