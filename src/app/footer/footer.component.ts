import {Component, OnInit} from '@angular/core';
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
export class FooterComponent implements OnInit {
  selectedTab: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  // this can be refactored
  this.selectedTab = this.router.url;
  }

  changeView(selectedRoute: string): void {
    this.router.navigate([selectedRoute], {relativeTo: this.route});

    this.selectedTab = selectedRoute;
  }
}
