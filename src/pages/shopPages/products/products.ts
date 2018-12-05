import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CartService } from '../../../providers/shop/cart';
import { CartPage } from '../cart/cart';
import {Slides} from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  @ViewChild(Slides) slides: Slides;
  cart = [];
  items = [];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private cartService: CartService) {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  openCart() {
    let chatModal = this.modalCtrl.create(CartPage);
    chatModal.onDidDismiss(data => {
      console.error(data);
    });
    chatModal.present();
  }

  ngAfterViewInit() {
    this.slides.slidesPerView = 1.6;
    this.slides.spaceBetween = 10;
    this.slides.centeredSlides = true;
  }
}

