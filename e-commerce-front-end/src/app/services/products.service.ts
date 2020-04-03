import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: AngularFirestore, private fireStorage: AngularFireStorage) { }

  getAllProducts() {
    return this.firestore.collection('products').snapshotChanges()
  }

  addNewProduct(name: string, price: number, image: File) {
    return new Promise((resolve, reject) => {
      let ref = this.fireStorage.ref('/products/' + image.name)
      ref.put(image).then(() => {
        ref.getDownloadURL().subscribe(imgUrl => {
          this.firestore.collection(`products`).add({name, price, imgUrl})
          .then(() => resolve('Added successfuly!'))
          .catch(() => reject('Oops! can not add this product, someting is wrong!'))
        })
      })
    })
  }
}
