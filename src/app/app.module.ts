import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { OrderByPipe } from './order-by-pipe';

import { TabsPage } from '../pages/tabs/tabs';

import { UserProfilePage } from '../pages/userPages/user-profile/user-profile';
import { AdminProfilePage } from '../pages/userPages/admin-profile/admin-profile';
import { DashboardPage } from '../pages/userPages/dashboard/dashboard';
import { SettingsPage } from '../pages/userPages/settings/settings';
import { LoginPage } from '../pages/userPages/login/login';

import { HomePage } from '../pages/forumPages/home/home';
import { ThreadsPage } from '../pages/forumPages/threads/threads';
import { CompleteThreadPage } from '../pages/forumPages/complete-thread/complete-thread';
import { ThreadCrudPage } from '../pages/forumPages/thread-crud/thread-crud';


import { OrdersPage } from '../pages/shopPages/orders/orders';
import { ProductsPage } from '../pages/shopPages/products/products';
import { ProductDetailsPage } from '../pages/shopPages/product-details/product-details';
import { AddNewPage } from '../pages/shopPages/add-new/add-new';


import { HttpClientModule } from '@angular/common/http';
import { SubforumsProvidersProvider } from '../providers/subforums/subforums';
import { ApiurlProvider } from '../providers/apiurl/apiurl';
import { UserProvider } from '../providers/user/user';

import { ListVetsPage } from '../pages/vetPages/list-vets/list-vets';
import { ChatRoomPage } from '../pages/vetPages/chat-room/chat-room';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyBIV-T7FKg8WAbsDmqBfMKhoAwfBMxwwP8",
  authDomain: "ionic-chat-bot.firebaseapp.com",
  databaseURL: "https://ionic-chat-bot.firebaseio.com",
  projectId: "ionic-chat-bot",
  storageBucket: "ionic-chat-bot.appspot.com",
  messagingSenderId: "623882371928"
};

@NgModule({
  declarations: [
    MyApp,
    OrderByPipe,
    ThreadsPage,
    CompleteThreadPage,
    HomePage,
    TabsPage,
    UserProfilePage,
    AdminProfilePage,
    ThreadCrudPage,
    ListVetsPage,
    ChatRoomPage,

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
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ThreadsPage,
    CompleteThreadPage,
    HomePage,
    TabsPage,
    UserProfilePage,
    AdminProfilePage,
    ThreadCrudPage,
    ListVetsPage,
    ChatRoomPage,

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
    ApiurlProvider,
    UserProvider
  ]
})
export class AppModule {}
