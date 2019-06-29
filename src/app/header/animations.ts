import { animate, animation, query, style } from '@angular/animations';

export const hideButtons = animation([
  style({ backgroundColor: 'transparent' }),
  query('.nav-item', [
    style({ opacity: 0 })
  ])
]);

export const fadeIn = animation([
  query('#navTitle', [
    style({ opacity: 0 }),
    animate('{{ time }}'),
    style({ opacity: 1 })
  ])
]);
