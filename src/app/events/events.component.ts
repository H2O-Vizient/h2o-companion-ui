import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `<section>
    <h1>Events</h1>
    <div class="btn-group">
      <button class="btn selected" type="button" [routerLink]="['user-events']">My Events</button>
      <button class="btn" type="button" [routerLink]="['all-events']">All Events</button>
    </div>
    <router-outlet></router-outlet>
  </section>`,
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [];
}
