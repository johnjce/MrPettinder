import { Component } from '@angular/core';

import { VetPpPage } from '../vet-pp/vet-pp';
import { HomePage } from '../home/home';
import { ProductsPage } from '../products/products';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  
  tab1Root = VetPpPage;
  tab2Root = HomePage;
  tab3Root = ProductsPage;

  constructor() {

  }
}
