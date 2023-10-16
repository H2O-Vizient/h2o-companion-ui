import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
      <div class="sign-in-content">
          <div class="welcome-text">
              Welcome to the Habitat for Humanity Collin County Companion
          </div>
          <div>
              <form>
                  <div class="form-group">
                      <input type="email" class="form-control text-box-input" id="exampleInputEmail1" aria-describedby="emailHelp"
                             placeholder="email">
                  </div>
                  <div class="form-group">
                      <input type="password" class="form-control text-box-input" id="exampleInputPassword1" placeholder="password">
                  </div>
                <div class="login-help">
                  <div class="form-check checkbox-container">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                  </div>
                    <a href="url" class="forgot-login">Forgot Login Credentials?</a>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
              <div class="or-block">
                  <hr class="line">
                  <div class="or-text">or</div>
                  <hr class="line">
              </div>
              <button type="button" class="btn btn-primary" [routerLink]="'/sign-up'">Sign Up</button>
          </div>
      </div>`,
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

}
