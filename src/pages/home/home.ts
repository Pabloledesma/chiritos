import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public products = [];
  
  constructor(
    private productProvider: ProductProvider, 
    private http: HttpClient, 
    public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.products = this.productProvider.getProducts();
  }

}
