import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from '../../product';
import { PRODUCTS } from '../../product-mock';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  public products: Product[];
  
  constructor(private afDB: AngularFireDatabase, public http: HttpClient) {
  }

  getProducts(){
    return this.afDB.list('products/');
  }
  
  upsertProduct(product){
    this.afDB.database.ref('products/' + product.id).set(product);
  }

}
