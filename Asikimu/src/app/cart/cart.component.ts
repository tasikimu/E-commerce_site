import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formbuilder.group({
    name: '',
    address: '',
    surname: '',
    number: '',
    city: '',
  });

  constructor(private cartService: CartService, private formbuilder: FormBuilder, private cartservice: CartService) { }

  onSubmit(): void{
    // process of checkout
    this.items = this.cartService.clearCart();
    window.alert('Your order  has been subitted');
    console.warn('Your order has been submitted', this.checkoutForm.value); 
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
