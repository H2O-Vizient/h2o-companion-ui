import {Component} from '@angular/core';
import {SupabaseService} from '../../services/supabase.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-password',
  template: `
    <div class="reset-container">
      <h1>Password Reset</h1>

      <form [formGroup]="form" *ngIf="!passwordSuccess; else passwordUpdated" (ngSubmit)="updatePassword()">
        <div class="input-group password">
          <input formControlName="newPassword"
                 class="form-control"
                 type="text"
                 id="newPassword"
                 placeholder="new password"
          />
        </div>
        <div class="input-group password-repeat">
          <input formControlName="newPasswordRepeat"
                 class="form-control"
                 type="text"
                 id="newPasswordRepeat"
                 placeholder="confirm new password"
          />
        </div>
        <button type="submit"
                class="btn mx-auto"
                [disabled]="invalidPassword()">
        Reset Password
        </button>
      </form>

      <ng-template #passwordUpdated>
        <p class="password-success">Your password was successfully reset.</p>
        <p class="password-success">In order to login please click the button below and enter your credentials:</p>
        <div class="home-button-wrapper">
          <button type="button" class="btn center home-button" routerLink="">Back to Home Page</button>
        </div>
      </ng-template>
    </div>
  `,
  styleUrls: ['update-password.component.scss']
})
export class UpdatePasswordComponent {
  passwordSuccess = true;
  form: FormGroup;

  constructor(protected readonly supabase: SupabaseService) {
    this.form = new FormGroup({
      newPassword: new FormControl({value: '', disabled: false}, Validators.required),
      newPasswordRepeat: new FormControl({value: '', disabled: false}, Validators.required)
    });
  }

  async updatePassword() {
    const password = this.form.get('newPassword')?.value;

    const {error} = await this.supabase.updatePassword(password);

    if (error) {
      console.error(error);
    } else {
      console.log('Password reset email sent successfully');
      this.passwordSuccess = true;
    }
  }

  invalidPassword(): boolean {
    return this.form.get('newPassword')?.value === '' || this.form.get('newPassword')?.value !== this.form.get('newPasswordRepeat')?.value;
  }
}
