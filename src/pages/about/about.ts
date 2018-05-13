import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { Product } from '../../product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  bestSellerProducts: Observable<any[]>;

  constructor(private productProvider: ProductProvider, public navCtrl: NavController) {
    //this.productProvider.getBestSellers();
  }

  ionViewDidLoad(){
    this.bestSellerProducts = this.productProvider.getBestSellers();
  }

 
}
