import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestoreService: AngularFirestore) { }

  addNewUser(id: string, name: String, address: String) {
    return this.firestoreService.doc('users/' + id).set({name, address})
  }
}
