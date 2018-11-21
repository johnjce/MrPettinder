import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProductDetailsPage } from '../product-details/product-details';
import { AddNewPage } from '../add-new/add-new';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  productList: Array<any>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.productList = [
      {name: "iPhone 5s", price: "799", description: "Gold, 16Gb", imageURL: "https://i.imgur.com/5JHgy9v.jpg"},
      {name: "Nike T-Shirt", price: "39.90", description: "size L Black", imageURL: "https://i.imgur.com/nHW7Voj.jpg"},
      {name: "Adidas Shoes", price: "29.00", description: "size 40, White", imageURL: "https://i.imgur.com/d5KNrDz.jpg"}
    ];
  }

  goToProductDetails(params){
    if (!params) params = {};
    this.navCtrl.push(ProductDetailsPage, {product: params});
  }

  addPage(){

    let modal = this.modalCtrl.create(AddNewPage);
    modal.present();

    modal.onDidDismiss(product => { 
      if(product){

        this.productList.push(product.product); 
        console.log(this.productList);
      }
    });

  }
}
