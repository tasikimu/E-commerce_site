import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  displayedImg = 0;
  
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const id = +this.route.snapshot.params['productId'];
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('productId'));
  
    // // Find the product that correspond with the id provided in route.
    this.product = this.productService.getProduct(id);
    // this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product){}

}
