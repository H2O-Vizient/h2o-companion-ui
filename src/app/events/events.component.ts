import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `<section>
    <h1>Events</h1>
    <div class="btn-group">
      <button class="btn selected" type="button">My Events</button>
      <button class="btn" type="button">All Events</button>
    </div>
    <div class="no-events" *ngIf="this.events.length === 0; else eventsTemplate">
      <mat-icon class="calendar">calendar_today</mat-icon>
      <h2>No Upcoming Events</h2>
      <span>
            You currently don't have any scheduled events. When you schedule one, you can view it here.
        </span>
      <button class="btn btn-primary view-all" type="button">VIEW ALL UPCOMING EVENTS</button>
    </div>

    <ng-template #eventsTemplate>
    <div class="events">
      DISPLAY EVENTS HERE
    </div>
    </ng-template>
  </section>`,
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  events = [];
}
