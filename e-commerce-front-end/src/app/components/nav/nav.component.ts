import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isOpen: boolean = false

  constructor(private authSer: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  tglNavbar() {
    this.isOpen = !this.isOpen
  }

  logout() {
    this.authSer.logout()
    .then(result => {
      this.router.navigate(['/login'])
    })
    .catch(err => {
      console.log('err', err.message)
    })
  }

}
