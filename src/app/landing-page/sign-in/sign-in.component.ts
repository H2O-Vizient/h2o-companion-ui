import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SupabaseService} from '../../services/supabase.service';
import {SignInRequest} from '../../models/sign-in-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  template: `
      <div class="sign-in-content">
        <h1>
          <div class="mx-auto text-center header-text">Welcome to the</div>
          <div class="mx-auto text-center header-text">Habitat for Humanity</div>
          <div class="mx-auto text-center header-text">Collin County</div>
          <div class="mx-auto text-center header-text">Companion</div>
        </h1>
          <div>
              <form [formGroup]="signInForm" (ngSubmit)="onSubmit()">
                  <div class="form-group">
                      <input formControlName="email" type="email" class="form-control text-box-input" id="exampleInputEmail1" aria-describedby="emailHelp"
                             placeholder="email">
                  </div>
                  <div class="form-group" >
                      <input formControlName="password" type="password" class="form-control text-box-input" id="exampleInputPassword1" placeholder="password">
                  </div>
                <div class="login-help">
                  <div class="form-check checkbox-container">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                  </div>
                    <a [routerLink]="'/forgot-password'" class="forgot-login">Forgot Login Credentials?</a>
                </div>
                <button type="submit" class="btn btn-primary">Sign In</button>
              </form>
              <div class="or-block">
                  <hr class="line">
                  <div class="or-text">or</div>
                  <hr class="line">
              </div>
              <button class="btn btn-primary" routerLink="/sign-up">Sign Up</button>
          </div>
      </div>`,
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loading = false;

  signInForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
});

  constructor(
      private readonly supabase: SupabaseService,
      protected router: Router
  ) {}

  async onSubmit() {

    try {
      this.loading = true
      const request: SignInRequest = {
        email: this.signInForm.get('email')?.value,
        password: this.signInForm.get('password')?.value
      }

      const response = await this.supabase.signIn(request);

      // Just calling this method here in order to see what it looks like to retrieve data from supabase
      await this.supabase.getData();

      console.log(response);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
      this.loading = false
    }
  }
}
