import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ThreadsPage } from '../threads/threads';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = ThreadsPage;
  tab2Root = ContactPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
 