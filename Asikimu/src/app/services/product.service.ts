import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] =[
    new Product(
      1,
      'Harry Potter and the Chamber of Secrets.',
      'Harry and friends return to Hogwarts with a bang — the bang of a flying Ford Anglia as it crashes into the Whomping Willow, that is.',
      600,
      1,
      ['assets/images/1.jpg', 'assets/images/2.jpg' ,'assets/images/three.jpg']
    ),
    new Product(
      2,
      'Harry Potter and the Goblet of Fire',
      'Harry returns to Hogwarts for his fourth year of school',
      500,
      1,
      ['assets/images/4.jpg', 'assets/images/5.jpg' ,'assets/images/6.jpg']
    ),
    new Product(
      3,
      'Harry Potter and the Prisoner of Azkaban',
      'As a result, swarms of Dementors — dark, faceless beings that “suck the soul” out of their victims and serve as the guards of Azkaban — infiltrate',
      700,
      1,
      ['assets/images/7.jpg', 'assets/images/8.jpg' ,'assets/images/9.jpg']
    )
  ]

  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(id: number){
    return this.products.find(product =>
      product.id === id);
  }
}