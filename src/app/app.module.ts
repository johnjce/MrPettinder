import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { OrderByPipe } from './order-by-pipe';


import { VetPpPage } from '../pages/vet-pp/vet-pp';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { AdminProfilePage } from '../pages/admin-profile/admin-profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ThreadsPage } from '../pages/threads/threads';
import { CompleteThreadPage } from '../pages/complete-thread/complete-thread';


import { HttpClientModule } from '@angular/common/http';
import { SubforumsProvidersProvider } from '../providers/subforums/subforums';
import { ThreadsProvider } from '../providers/threads/threads';
import { CompleteThreadProvider } from '../providers/complete-thread/complete-thread';
import { ApiurlProvider } from '../providers/apiurl/apiurl';
import { UserProvider } from '../providers/user/user';


import { OrdersPage } from '../pages/orders/orders';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';

import { ProductsPage } from '../pages/products/products';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { AddNewPage } from '../pages/add-new/add-new';


@NgModule({
  declarations: [
    MyApp,
    OrderByPipe,
    ThreadsPage,
    CompleteThreadPage,
    VetPpPage,
    HomePage,
    TabsPage,
    UserProfilePage,
    AdminProfilePage,

    OrdersPage,
    DashboardPage,
    SettingsPage,
    LoginPage,
    ProductsPage,
    ProductDetailsPage,
    AddNewPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ThreadsPage,
    CompleteThreadPage,
    VetPpPage,
    HomePage,
    TabsPage,
    UserProfilePage,
    AdminProfilePage,

    OrdersPage,
    DashboardPage,
    SettingsPage,
    LoginPage,
    ProductsPage,
    ProductDetailsPage,
    AddNewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SubforumsProvidersProvider,
    ThreadsProvider,
    CompleteThreadProvider,
    ApiurlProvider,
    UserProvider
  ]
})
export class AppModule {}
