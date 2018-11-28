import { Component } from '@angular/core';

import { ListVetsPage } from '../vetPages/list-vets/list-vets';
import { HomePage } from '../forumPages/home/home';
import { ProductsPage } from '../shopPages/products/products';
<<<<<<< HEAD
=======
import { VetProfilePage } from '../vetPages/vet-profile/vet-profile';
>>>>>>> 0d3115bffbbc3793c03d42022d64892ef6567bea

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
<<<<<<< HEAD
  tab1Root = ListVetsPage;
=======
  tab1Root = VetProfilePage;
>>>>>>> 0d3115bffbbc3793c03d42022d64892ef6567bea
  tab2Root = HomePage;
  tab3Root = ProductsPage;

  constructor() {

  }
}
