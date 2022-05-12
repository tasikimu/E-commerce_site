import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items: any[] = [];
  total: number;
  // items = this.cartService.getItems();



  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartItems.subscribe(data => {
      this.items = data

      if(this.items) this.getTotal(this.items)
    })
  }

  onDelete(i: number){
    this.items.splice(i, 1);
    this.getTotal(this.items)
    localStorage.removeItem('cart')
  }

  validateInput(event: any, i: number){
    const qty = +event.target.value;
    if(qty < 1){
    event.target.value = this.items[i].quantity;
    return;
    }
    this.QtyUpdate(qty, i)
  }

  private QtyUpdate(qty: number, i: number){
    this.items[i].quantity = qty;
    this.getTotal(this.items)
  }

  getTotal(data: any){
    let subs = 0;
    for(const item of data)
    subs += item.Price * item.quantity;

    this.total = subs;
  }


  // onSubmit(): void{
  //   // process of checkout
  //   this.items = this.cartService.clearCart();
  //   window.alert('Your order  has been subitted');
  //   console.warn('Your order has been submitted', this.checkoutForm.value); 
  //   this.checkoutForm.reset();
  // }

  // checkoutForm = this.formbuilder.group({
  //   name: '',
  //   address: '',
  //   surname: '',
  //   number: '',
  //   city: '',
  // });


}