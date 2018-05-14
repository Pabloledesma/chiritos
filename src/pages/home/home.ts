import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NavController, ModalController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { ProductDetailPage } from '../product-detail/product-detail';
import { FilterModalPage } from '../filter-modal/filter-modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allProducts: Observable<any[]>;
   
  constructor(
    private modalController: ModalController,
    private productProvider: ProductProvider, 
    //private http: HttpClient, 
    public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.allProducts = this.productProvider.getProducts();
  }

  openFilterModal(){
    let openFilterModal = this.modalController.create(FilterModalPage);
    openFilterModal.onDidDismiss((filterState) => {
      this.allProducts = this.productProvider.getProducts(filterState);
    });
    openFilterModal.present();
  }

  goToProductDetailPage(product){
    this.navCtrl.push(ProductDetailPage, {productDetails: product});
  }

}
