import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { Product } from '../../product';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  bestSellerProducts: Product[];

  constructor(private productProvider: ProductProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.bestSellerProducts = this.productProvider.getProducts().filter( product => {
      product.bestSeller == true;
    });
     
  }

}
