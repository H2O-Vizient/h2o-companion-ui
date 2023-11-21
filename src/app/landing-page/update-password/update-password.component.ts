import {Component, OnInit} from '@angular/core';
import {SupabaseService} from '../../services/supabase.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-password',
  template: `
    <div class="reset-container">
      <h1>Password Reset</h1>

<!--      {#if !passwordSuccess}-->
      <form>
        <div class="input-group password">
          <input
            class="form-control"
            type="password"
            id="newPassword"
            placeholder="new password"
          />
        </div>
        <div class="input-group password-repeat">
          <input
            class="form-control"
            type="password"
            id="newPasswordRepeat"
            placeholder="confirm new password"
          />
        </div>
        <button type="submit"
                class="btn mx-auto">
        Reset Password
        </button>
      </form>
<!--      {:else}-->
      <p class="passwordSuccess">Your password was successfully reset.</p>
      <p class="passwordSuccess">In order to login please click the button below and enter your credentials:</p>
      <div class="home-button-wrapper">
        <button type="button" class="btn center home-button">Back to Home Page</button>
      </div>
    </div>
  `,
  styleUrls: ['update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  passwordSuccess = false;
  form: FormGroup;

  constructor(protected readonly supabase: SupabaseService) {
    this.form = new FormGroup({
      newPassword: new FormControl({value: '', disabled: false}, Validators.required),
      newPasswordRepeat: new FormControl({value: '', disabled: false}, Validators.required)
    });
  }

  ngOnInit() {
    // - Retrieve access and refresh token off the incoming session on init
    // - Then the user will enter their new password twice
    //    - create a method that will allow a user to update their password when the newPassword and newPasswordRepeat match

    console.log(this.supabase.session?.access_token);
    console.log(this.supabase.session?.refresh_token);
    console.log(this.supabase);
  }
}
