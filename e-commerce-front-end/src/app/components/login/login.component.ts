import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMsg: string

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(form: NgForm) {
    let data = form.value
    this.authService.login(data.email, data.password)
    .then(result => {
      this.errorMsg = null
      console.log(result)

      this.router.navigate(['/'])
    })
    .catch(err => {
      this.errorMsg = err.message
      console.log(err)
    })
  }

}
