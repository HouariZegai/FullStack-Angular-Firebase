import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor(private angFireAuth: AngularFireAuth) {

  }

  signup(email, password) {
    return this.angFireAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  login(email, password) {
    return this.angFireAuth.auth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return this.angFireAuth.auth.signOut()
  }

}
