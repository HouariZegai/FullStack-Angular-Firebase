import { AuthService } from './../../services/auth.service';
import { CartService } from './../../services/cart.service';
import { ProductsService } from './../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  products: Array<Product> = []
  productObservable: Subscription
  add: number = -1 // for view qte & buy button

  constructor(private productsService: ProductsService, private cartSer: CartService, private autSer: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.productObservable = this.productsService.getAllProducts().subscribe(data => {
      this.products = data.map(element => {
        return {
          id: element.payload.doc.id,
          name: element.payload.doc.data()['name'], // or: ...element.payload.doc.data()
          price: element.payload.doc.data()['price'],
          imgUrl: element.payload.doc.data()['imgUrl']
        }
      })
    })
  }

  ngOnDestroy() {
    this.productObservable.unsubscribe()
  }
 
  addToCart(index: number) {
    if(this.autSer.userId)
      this.add = index
    else
      this.router.navigate(['/login'])
    // console.log('add to cart', index)
  }

  buy(amount: number) {
    let selectedProduct = this.products[this.add]
    let data = {
      name: selectedProduct.name,
      amount: +amount,
      price: selectedProduct.price,
    }
    this.cartSer.addToCart(data)
    .then(result => this.add = -1)
    .catch(err => console.log('err', err))
  }

}