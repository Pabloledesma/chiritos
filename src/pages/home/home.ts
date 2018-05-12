import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public allProducts;
   
  constructor(
    private productProvider: ProductProvider, 
    private http: HttpClient, 
    public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.allProducts = this.productProvider.getProducts(); 
  }

  goToProductDetailPage(product){
    this.navCtrl.push(ProductDetailPage, {productDetails: product});
  }

}
