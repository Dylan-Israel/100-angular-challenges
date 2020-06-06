import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(500, style({ opacity: 1 }))
  ]),
  transition(':leave', [
    animate(500, style({ opacity: 0 }))
  ]),
]);
