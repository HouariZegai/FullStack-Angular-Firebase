import { UserService } from './../../services/user.service';
import { User } from '../../interfaces/User.interface';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  errorMsg: string

  constructor(private authSer: AuthService, private userSer: UserService, private router: Router) { }

  onSignup(f: NgForm) {
    let data: User = f.value
    this.authSer.signup(data.email, data.password)
    .then(result => {
      this.errorMsg = null
      
    this.userSer.addNewUser(result.user.uid, data.name, data.address)
      .then(result => {
        this.router.navigate(['/'])
      })
      .catch(err => console.log('register user data (firestore)', err.message))
    })
    .catch(err => {
      this.errorMsg = err.message
    })
  }

}
