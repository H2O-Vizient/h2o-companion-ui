import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SupabaseService} from '../services/supabase.service';

@Component({
  selector: 'app-footer',
  template: `
  <section class="footer" *ngIf="isActiveSession">
    <div class="tab" [ngClass]="{'selected': this.selectedTab == 'groups'}">
      <mat-icon>inbox</mat-icon>
      Groups
    </div>
    <div class="tab" (click)="changeView('events/user-events')" [ngClass]="{'selected': this.selectedTab == 'events/user-events'}">
      <mat-icon>event_note</mat-icon>
      Events
    </div>
    <div class="tab" (click)="changeView('profile')" [ngClass]="{'selected': this.selectedTab == 'profile'}">
      <mat-icon>account_circle</mat-icon>
      Profile
    </div>
  </section>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  selectedTab: string = '';
  isActiveSession = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private supabaseService: SupabaseService) {
  }

  ngOnInit(): void {
    this.supabaseService.isActiveSession.subscribe(b => {
      this.isActiveSession = b;
      if (this.isActiveSession) {
        // this can be refactored
        this.selectedTab = 'events/user-events';
      }
    });
  }

  changeView(selectedRoute: string): void {
    this.router.navigate([selectedRoute], {relativeTo: this.route});

    this.selectedTab = selectedRoute;
    console.log('change', this.selectedTab);
  }
}
