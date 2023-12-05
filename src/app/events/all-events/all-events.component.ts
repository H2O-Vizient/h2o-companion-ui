import {Component, OnInit} from '@angular/core';
import {Event} from '../../models/event.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-all-events',
  template: `
      <div class="events">
          <form [formGroup]="findEventsForm">
              <div class="select-group">
                  <div class="label">Choose a Date</div>
                  <div class="input-group">
                      <span class="input-group-text"> <mat-icon class="calendar">calendar_today</mat-icon></span>
                      <select class="form-select" formControlName="date">
                          <option *ngFor="let date of dates" [value]="date">{{date}}</option>
                      </select>
                  </div>
              </div>


              <div class="select-group">
                  <div class="label">Choose a Location</div>
                  <div class="input-group">
                      <span class="input-group-text"> <mat-icon class="location">location_on</mat-icon></span>
                      <select class="form-select" formControlName="date">
                          <option *ngFor="let location of locations" [value]="location">{{location}}</option>
                      </select>
                  </div>
              </div>
          </form>

          <div class="event-list">
              <div class="label">Choose an event</div>

              <div class="event-thumbnail" *ngFor="let event of events">
                  <mat-icon class="event-image"> insert_photo</mat-icon>
                  <div class="event-info">
                      <div class="name-date">
                          <div class="event-date">{{event.date}}</div>
                          <div class="event-name">{{event.eventName}}</div>
                      </div>
                      <div class="event-location">
                          <mat-icon class="event-location-icon">location_on</mat-icon>
                          {{event.location}}
                      </div>
                      <hr>
                  </div>
              </div>
          </div>
      </div>`,
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {
  events: Event[] = [{
    eventName: 'Event Name',
    location: 'Cape G',
    date: 'Tuesday, December 5th, 2023,'
  },
    {
      eventName: 'Event Name',
      location: 'Cape G',
      date: 'Tuesday, December 5th, 2023,'
    },
    {
      eventName: 'Event Name',
      location: 'Cape G',
      date: 'Tuesday, December 5th, 2023,'
    }];

  findEventsForm: FormGroup = new FormGroup({
    date: new FormControl(null),
    location: new FormControl(null)
  })

  dates: string[] = [];
  locations: string[] = [];

  ngOnInit():void {
    this.events.forEach(x => {
      this.dates.push(x.date);
      this.locations.push(x.location);
    });
  }
}
