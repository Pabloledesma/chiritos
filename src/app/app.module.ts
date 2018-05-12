import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductProvider } from '../providers/product/product';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDEEwnVdurN-U4YbI5iTxb4HCkN-4V6sUo",
  authDomain: "tienda-de-ropa-2f129.firebaseapp.com",
  databaseURL: "https://tienda-de-ropa-2f129.firebaseio.com",
  projectId: "tienda-de-ropa-2f129",
  storageBucket: "tienda-de-ropa-2f129.appspot.com",
  messagingSenderId: "1041903516706",
  timestampsInSnapshots: true
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestoreModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductProvider
  ]
})
export class AppModule {}
