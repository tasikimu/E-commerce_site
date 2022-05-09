import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: []

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>(
      '/assets/shipping.json');
  }

  // addToCart(product: Product) {
  //   this.items.push(product);
  // }

  // getItems() {
  //   return this.items;
  // }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private http: HttpClient) { }

  addItem(product: Product){
    const exist = this.items.find((item) => {
      return item === product.id;
    });
    if(exist)
    exist;
    else
    this.items.push();
    console.log(this.items);
  }
}
