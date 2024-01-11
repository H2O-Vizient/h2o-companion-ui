import {Component} from '@angular/core';
import {SupabaseService} from '../services/supabase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  template: `
    <div class="profile-wrapper">
      <h1>Profile</h1>
      <div class="sign-out">
        <button (click)="signOut()" class="btn btn-primary">Sign Out</button>
      </div>
    </div>
  `,
  styleUrls: ['user-profile.component.scss']
})
export class UserProfileComponent{

  constructor(
    private supabaseService: SupabaseService,
    protected router: Router
  ) {}

  async signOut() {
    this.supabaseService.signOut();
    await this.router.navigate(['../']);
  }
}
