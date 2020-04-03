import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../interfaces/product.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private firestore: AngularFirestore, private authSer: AuthService) { }

  addToCart(product) {
    return this.firestore.collection(`users/${this.authSer.userId}/cart`).add(product)
  }

  getCart() {
    return this.firestore.collection(`users/${this.authSer.userId}/cart`).snapshotChanges()
  }

  updateAmount(id, amount) {
    return this.firestore.doc(`users/${this.authSer.userId}/cart/${id}`).update({amount})
  }

  deleteProduct(id) {
    return this.firestore.doc(`users/${this.authSer.userId}/cart/${id}`).delete()
  }

}
