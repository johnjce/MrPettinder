import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { HomePage } from '../forumPages/home/home';
import { ProductsPage } from '../shopPages/products/products';
import { ListVetsPage } from '../vetPages/list-vets/list-vets';
import { PacientsPage } from '../userPages/pacients/pacients';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  
  tab1Root;
  tab2Root = HomePage;
  tab3Root = ProductsPage;


  username: any;
  constructor(
    public navParams:NavParams) {
      if(this.navParams.data){
        this.tab1Root=PacientsPage;
      }else{
        this.tab1Root=ListVetsPage;
      }
  }

  ionViewWillEnter(){
  }

}
