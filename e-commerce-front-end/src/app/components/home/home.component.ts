import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<Product> = []

  constructor() { }

  ngOnInit(): void {
    this.products.push(
      {name: "apple", price: 120, imgUrl: "assets/images/apple.jpg"},
      {name: "Banana", price: 270, imgUrl: "assets/images/banana.jpg"},
      {name: "Pineapple", price: 600, imgUrl: "assets/images/pineapple.jpg"},
      {name: "Strawberry", price: 300, imgUrl: "assets/images/strawberry.jpg"}
    )
  }

  addToCart(index) {
    console.log(this.products[index])
  }

}