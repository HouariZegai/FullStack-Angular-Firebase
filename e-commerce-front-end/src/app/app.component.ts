import { Component } from '@angular/core';
import { transition, trigger, query, group, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('router', [
      transition('0 => 1, 0 => 2, 1 => 2, 3 => 4', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(100%)'
            }),
            animate(500, style({
              transform: 'translateX(0)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0)'
            }),
            animate(500, style({
              transform: 'translateX(-100%)'
            }))
          ])
        ])
      ]),
      transition('1 => 0, 2 => 0, 2 => 1, 4 => 3', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(0)'
            }),
            animate(500, style({
              transform: 'translateX(100%)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(-100%)'
            }),
            animate(500, style({
              transform: 'translateX(0)'
            }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent { }
