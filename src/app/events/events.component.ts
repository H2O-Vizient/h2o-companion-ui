import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {EventsRoutingService} from './events-routing.service';

@Component({
  selector: 'app-events',
  template: `
      <section>
          <h1>Events</h1>
<!--        TODO: events header should be sticky-->
          <div class="event-list-container">
              <div class="btn-group">
                  <button class="btn" [ngClass]="{'selected': this.selectedRoute == 'user-events'}" type="button"
                          (click)="selectView('user-events')">My Events
                  </button>
                  <button class="btn" type="button" [ngClass]="{'selected': this.selectedRoute == 'all-events'}"
                          (click)="selectView('all-events')">All Events
                  </button>
              </div>
              <router-outlet></router-outlet>
          </div>
      </section>`,
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit{
  selectedRoute = '';

  constructor(private router: Router, private route: ActivatedRoute, private eventsRoutingService: EventsRoutingService) {
  }

  ngOnInit(): void {
    this.eventsRoutingService.selectedRoute.subscribe( selectedRoute => {

      this.router.navigate([selectedRoute], {relativeTo: this.route}).then(r => this.selectedRoute = selectedRoute);
    });

  }

  selectView(selectedRoute: string) {
    this.eventsRoutingService.selectedRoute.next(selectedRoute);
  }
}
