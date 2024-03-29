import { Component } from '@angular/core';
import {EventsRoutingService} from '../../services/events-routing.service';

@Component({
  selector: 'app-user-events',
  template: `
      <div class="no-events" *ngIf="this.events.length === 0; else eventsTemplate">
          <mat-icon class="calendar">calendar_today</mat-icon>
          <h2>No Upcoming Events</h2>
          <span>
            You currently don't have any scheduled events. When you schedule one, you can view it here.
        </span>
          <button class="btn btn-primary view-all" type="button" (click)="changeView()">VIEW ALL UPCOMING EVENTS</button>
      </div>
      <ng-template #eventsTemplate>
        DISPLAY EVENTS HERE
      </ng-template>`,
  styleUrls: ['./user-events.component.scss']
})
export class UserEventsComponent {
 events = [];

 constructor(private eventsRoutingService: EventsRoutingService) {}

 changeView() {
    this.eventsRoutingService.selectedRoute.next('all-events');
 }
}
