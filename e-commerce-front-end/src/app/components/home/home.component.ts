import { ProductsService } from './../../services/products.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Array<Product> = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => this.products = data)
  }

  addToCart(index) {
    console.log(this.products[index])
  }

}