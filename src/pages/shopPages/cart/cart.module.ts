import { NgModule } from '@angular/core';
import { CartPage } from './cart';

@NgModule({
  declarations: [
    CartPage,
  ],
 
  exports: [
    CartPage
  ]
})
export class CartModule {}
