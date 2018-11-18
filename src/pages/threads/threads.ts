import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ThreadsProvider } from '../../providers/threads/threads';
import { CompleteThreadPage } from '../complete-thread/complete-thread';


import { OrdersPage } from '../orders/orders';
import { DashboardPage } from '../dashboard/dashboard';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';

import { ProductsPage } from '../products/products';
import { ProductDetailsPage } from '../product-details/product-details';
import { AddNewPage } from '../add-new/add-new';

@Component({
  selector: 'page-threads',
  templateUrl: 'threads.html',
})
export class ThreadsPage {
  id: number;
  threads: any[] = [];
  title:string="";
  constructor(public navCtrl: NavController, public navParams: NavParams, private threadsProvider: ThreadsProvider ) {
    this.id = navParams.data;
    this.getAllThreads();
  }

  getAllThreads() {
    return this.threadsProvider.getThreads(this.id).subscribe(
      (data) => {
        this.threads = data.threads;
        this.title = data.description;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  openItem(id:string) {
    this.navCtrl.push(CompleteThreadPage, id);
  }

  openProfile() {
    this.navCtrl.push(DashboardPage);
  }
}
