import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<section class="footer">
    <div class="tab">
        <span class="material-symbols-outlined">
            group
        </span>
      Groups
    </div>
    <div class="tab selected">
        <span class="material-symbols-outlined">
            grid_view
        </span>
      Events
    </div>
    <div class="tab">
       <span class="material-symbols-outlined">
        account_circle
    </span>
      Profile
    </div>
  </section>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

}
