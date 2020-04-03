import { ProductsService } from './../../services/products.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @ViewChild('image') image: ElementRef

  constructor(private productSer: ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form: NgForm) {
    let name = form.value.name,
      price = form.value.price,
      img = (<HTMLInputElement>this.image.nativeElement).files[0];

    this.productSer.addNewProduct(name, price, img)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
    // console.log((this.image.nativeElement as HTMLInputElement).files[0])
  }

}
