import {Component} from '@angular/core';
import {SupabaseService} from '../../services/supabase.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  template: `
    <div class="page-content">
      <h1>Account Recovery</h1>
      <div *ngIf="!passwordEmailSent; else emailSent">
        <form (ngSubmit)="handlePasswordReset()" [formGroup]="form">
          <div class="message">Please provide your email that you have an account with:</div>
          <div class="email-input">
            <input type="text"
                   class="form-control"
                   placeholder="email address"
                   formControlName="userEmail"/>
          </div>
          <button class="btn mx-auto" >Send Password Reset</button>
        </form>
      </div>

      <ng-template #emailSent>
        <div class="message">Your password recovery link has been sent. You may need to check your spam folder for the email if you don't see it.</div>
        <div class="message2">You can either close this window or click the button below and return to the login page.</div>
      </ng-template>

      <button type="button" class="btn mx-auto" routerLink="">Return to Login</button>
    </div>
  `,
  styleUrls: ['forgot-password.component.scss']
})

export class ForgotPasswordComponent {
  passwordEmailSent = false;
  errorMessage = '';
  form: FormGroup;

  constructor(private readonly supabase: SupabaseService) {
    this.form = new FormGroup({
      userEmail: new FormControl({value: '', disabled: false}, Validators.required)
    });
  }

  async handlePasswordReset() {
    try {
      const userEmail = this.form.get('userEmail')?.value;

      if (typeof userEmail !== 'string') {
        this.errorMessage = 'Invalid Email';
        return;
      }

      const {error} = await this.supabase.resetPassword(userEmail);

      if (error) {
        console.error(error);
        this.errorMessage = error.message;
      } else {
        console.log('Password reset email sent successfully');
        this.passwordEmailSent = true;
      }
    } catch {
      console.error('Password reset failed');
    }
  }
}
