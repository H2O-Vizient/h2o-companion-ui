import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  template: `<section class="footer">
    <div class="tab" [ngClass]="{'selected': this.selectedTab == 'groups'}">
      <mat-icon>inbox</mat-icon>
      Groups
    </div>
    <div class="tab" (click)="changeView('events')" [ngClass]="{'selected': this.selectedTab == 'events'}">
      <mat-icon>event_note</mat-icon>
      Events
    </div>
    <div class="tab" [ngClass]="{'selected': this.selectedTab == 'profile'}">
      <mat-icon>account_circle</mat-icon>
      Profile
    </div>
  </section>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  selectedTab: string = '';
  constructor(private router: Router, private route: ActivatedRoute) {
  }
  changeView(selectedRoute: string) {
    this.router.navigate([selectedRoute], {relativeTo: this.route});

    this.selectedTab = selectedRoute;
  }
}
