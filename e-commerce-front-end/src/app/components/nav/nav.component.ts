import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  tglNavbar() {
    this.isOpen = !this.isOpen
  }

}
