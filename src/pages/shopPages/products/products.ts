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
      {
        name: "collar cobaya", 
        price: "18.20", 
        description: "size xS, 4cm de largo", 
        imageURL: "https://petuluku.es/media/catalog/product/cache/1/image/650x650/9df78eab33525d08d6e5fb8d27136e95/a/r/arnes_cobaya_rojo_1.png"
      },
      {
        name: "jaula conejo", 
        price: "39.90", 
        description: "size L Black, orange and green", 
        imageURL: "https://d2rp9bqx0m7ihv.cloudfront.net/media/1/photos/products/115998/82734-001536n_1_g.jpg"
      },
      {
        name: "huesos de jamon", 
        price: "29.00", 
        description: "40, size middle", 
        imageURL: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201607/13/00149510203844____1__640x640.jpg"
      },
      {
        name: "TecTake game tree", 
        price: "110.60", 
        description: "With this extravagant TecTake game tree, the kittens of the house can enjoy themselves as dwarfs. Adventures and fun without limits thanks to its multiple levels that offer tubes, camitas, platforms to make you curious, etc.", 
        imageURL: "https://cdn.tectake.es/media/catalog/product/cache/1/small_image/1472x/0dc2d03fe217f8c83829496872af24a0/4/0/402742-4.jpg"
      }
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
      }
    });

  }
}
