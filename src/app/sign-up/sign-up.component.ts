import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpRequest} from '../models/sign-up-request';

@Component({
  // TODO:
  //   - finish template
  //   - fix form tags
  //   - wire sign up button
  //   - add custom validators based on sign up stage

  selector: 'app-sign-up',
  template: `
    <div class="sign-up-container">
      <div class="step-one" *ngIf="signupStage === 0">
        <div class="text">
                Are you signing up for a new Volunteer account? Let's get started!
        </div>
          <div class="text">First, what's your name?</div>
          <form class="form-group your-name" [formGroup]="signupForm">
              <span class="input-group-text">😀</span>
              <input type="text" class="form-control text-box-input"
                     placeholder="your name"
                     formControlName="name">
          </form>
        </div>
      <div class="step-two" *ngIf="signupStage === 1">
        <div class="text">And your email address?</div>
        <form class="form-group your-name" [formGroup]="signupForm">
          <span class="input-group-text">✉</span>
          <input type="text" class="form-control text-box-input"
                 placeholder="email address"
                 formControlName="email">
        </form>
        <mat-checkbox>Add me to the mailing list</mat-checkbox>
      </div>
      <div class="step-two" *ngIf="signupStage === 2">
        <div class="text">Now's a good time to set a password; don't forget it!</div>
        <div class="text">Passwords must be at least 10 characters and include a number.</div>
        <form class="form-group your-name" [formGroup]="signupForm">
          <span class="input-group-text">🔒</span>
          <input type="text" class="form-control text-box-input"
                 placeholder="password"
                 formControlName="password">
          <input type="text" class="form-control text-box-input"
                 placeholder="password"
                 formControlName="passwordConfirmation">
        </form>
      </div>
      <div class="step-two" *ngIf="signupStage === 3">
        <div class="text">At what phone number may we reach you?</div>
        <form class="form-group your-name" [formGroup]="signupForm">
          <span class="input-group-text">📱</span>
          <input type="text" class="form-control text-box-input"
                 placeholder="phone number"
                 formControlName="phoneNumber">
        </form>
      </div>
      <div class="step-two" *ngIf="signupStage === 4">
        <div class="text">When is your birthday?</div>
        <form class="form-group your-name" [formGroup]="signupForm">
          <span class="input-group-text">📅</span>
          <input type="date" class="form-control text-box-input"
                 placeholder="mm/dd/yyyy"
                 formControlName="birthday">
        </form>
      </div>
      <button type="button" class="btn btn-primary" [disabled]="!signupForm.valid" (click)="advanceSignupStage()">Next</button>
      <button type="button" class="btn btn-primary">{{signupStage > 0 ? 'Back' : 'Back to Home Page'}}</button>
      </div>
  `,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm = new FormGroup({
    name: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    passwordConfirmation: new FormControl(null),
    phoneNumber: new FormControl(null),
    birthday: new FormControl(null)
  });
  signupStage: number = 0;
  signUpRequest: SignUpRequest = {
    addToMailingList: false,
    adminBio: '',
    affiliations: [],
    birthday: '',
    email: '',
    id: '',
    name: '',
    password: '',
    passwordConfirmed: false,
    phone: '',
    publicBio: '',
    volunteerId: ''
  };

  advanceSignupStage() {
    if(this.signupStage < 6) {
      return this.signupStage ++
    } else {
      return;
    }
  }

}
