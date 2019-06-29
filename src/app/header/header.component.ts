import { Component, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn, hideButtons } from './animations';

const swingAnimation = trigger('fade', [
  transition(':enter', [
    useAnimation(hideButtons),
    useAnimation(fadeIn, {
      params: {
        time: '1s'
      }
    }),
    query('.nav-item', [stagger(100, [style({ opacity: 0 }), animate(200), style({ opacity: 1 })])]),
    animate(500),
    style({ opacity: 1 })
  ])
]);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [swingAnimation]
})

/**
 * This component represent the header of the web site with the navigation menu
 */
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
