import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  placeholder =  []
  cartItems = new BehaviorSubject([])

  constructor(private http: HttpClient) {
    //retrieving data from localstorage everytime the site loads
    const ls = JSON.parse(localStorage.getItem('cart'));

    if(ls) this.cartItems.next(ls);
   }

   
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>(
      '/assets/shipping.json');
  }

  // addToCart(product: Product) {
  //   this.cartItems.push();
  // }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    return this.cartItems;
  }

  addItem(product: Product){
    const ls = JSON.parse(localStorage.getItem('cart'));

    let exist: Product;

    if(ls)
    exist = ls.find((item) => {
      return item.id === product.id;
    });

    if(exist){
      exist.quantity++;
      localStorage.setItem('cart', JSON.stringify(ls));
    }
    else{
      if(ls){
        const  newData = [...ls, product];
        localStorage.setItem('cart', JSON.stringify(newData));
        this.cartItems.next(JSON.parse(localStorage.getItem('cart')));
      }
      else{
        this.placeholder.push(product);
        localStorage.setItem('cart', JSON.stringify(this.placeholder));
        this.cartItems.next(this.placeholder);
      }
    }

  //   const exist = this.cartItems.find((item) => {
  //     return item === product.id;
  //   });
  //   if(exist)
  //   exist.qty++;
  //   else
  //   this.cartItems.push(product);
  //   this.numOfItems.next(this.cartItems);
  // }
  }
}
