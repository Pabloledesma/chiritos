import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { Product } from '../../product';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  bestSellerProducts: any[];

  constructor(private productProvider: ProductProvider, public navCtrl: NavController) {
    //console.log(this.productProvider.getBestSellers());
  }

  ionViewDidLoad(){
    
  }

 
}
