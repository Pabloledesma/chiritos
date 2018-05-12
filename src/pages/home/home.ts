import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { ProductDetailPage } from '../product-detail/product-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allProducts: Observable<any[]>;
   
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
