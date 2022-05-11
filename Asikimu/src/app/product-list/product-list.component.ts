import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe((products: Product[]) => {
  //     console.log(products);
  //     this.products = products;
  //   });
  // }

}
