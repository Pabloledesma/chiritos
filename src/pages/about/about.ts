import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { Product } from '../../product';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  allProducts: any[];
  bestSellerProducts: any[];

  constructor(private productProvider: ProductProvider, public navCtrl: NavController) {
    this.productProvider.getProducts().valueChanges()
      .subscribe(products => {
        this.allProducts = products;
      });
  }

  ionViewDidLoad(){
    
  }

 /* getBestSellers(){
    for(let i = 0; i < this.allProducts.length; i++){
      if(this.allProducts[i].bestSeller){
        console.log(this.allProducts[i]);
        this.bestSellerProducts.push(this.allProducts[i]);
      }

    }
    console.log(this.bestSellerProducts);
  }*/

}
