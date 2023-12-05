import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-events',
  template: `<section>
    <h1>Events</h1>
    <div class="btn-group">
      <button class="btn" [ngClass]="{'selected': this.selectedRoute == 'user-events'}" type="button" (click)="changeView('user-events')">My Events</button>
      <button class="btn" type="button" [ngClass]="{'selected': this.selectedRoute == 'all-events'}" (click)="changeView('all-events')">All Events</button>
    </div>
    <router-outlet></router-outlet>
  </section>`,
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  selectedRoute: string = 'user-events';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  changeView(selectedRoute: string) {
    this.router.navigate([selectedRoute], {relativeTo: this.route});

    this.selectedRoute = selectedRoute;
  }
}
