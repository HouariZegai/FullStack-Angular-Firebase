import { Shopping } from './../../interfaces/shopping.interface';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<Shopping> 

  constructor(private cartSer: CartService) { }

  ngOnInit(): void {
    this.cartSer.getCart().subscribe(cart => {
      this.cart = cart.map(shopping => {
        return {
          id: shopping.payload.doc.id,
          amount: shopping.payload.doc.data()['amount'],
          name: shopping.payload.doc.data()['name'],
          price: shopping.payload.doc.data()['price']
        }
      })
      console.log(this.cart)
    }, err => {
      console.log('err (loading cart)', err.message)
    })
  }

  save(index) {
    this.cartSer.updateAmount(this.cart[index].id, this.cart[index].amount)
  }

  delete(index) {
    console.log('delete: ', this.cart[index].id)
    this.cartSer.deleteProduct(this.cart[index].id)
  }

}
