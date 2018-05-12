import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../product-mock';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

interface Product {
  id: string;
  description: string;
  gender: string;
  image: string;
  name: string;
  price: string;
  bestSeller: boolean;
} 

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  productsCol: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  
  constructor(private afs: AngularFirestore, public http: HttpClient) {
    this.afs.firestore.settings({timestampsInSnapshots: true});
    for (let i = 0; i < PRODUCTS.length; i++) {
      this.addProduct(PRODUCTS[i]);
    }
  }

  ionViewDidLoad(){
    this.productsCol = this.afs.collection('products');
    this.products = this.productsCol.valueChanges();
  }

  getProducts(){
    return this.afs.collection('products').valueChanges();
  }

  addProduct(product){
    this.afs.collection('products').add(product);
  }
  
  upsertProduct(product){
    //this.afDB.database.ref('products/' + product.id).set(product);
  }

  getBestSellers(){
    //return this.afDB.database.ref().child('products').orderByChild('bestSeller').equalTo(true).toString;
  }

}
