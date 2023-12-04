import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<section class="footer">
    <div class="tab">
      <mat-icon>people_outline</mat-icon>

      Groups
    </div>
    <div class="tab selected">
      <mat-icon>event_note</mat-icon>
      Events
    </div>
    <div class="tab">
      <mat-icon>account_circle</mat-icon>
      Profile
    </div>
  </section>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
