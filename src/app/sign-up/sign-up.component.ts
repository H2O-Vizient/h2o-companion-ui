import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpRequest} from '../models/sign-up-request';

@Component({
  selector: 'app-sign-up',
  template: `
      <div class="sign-up-container">
          <div class="text">
              Are you signing up for a new Volunteer account? Let's get started!
          </div>
          <div class="text">First, what's your name?</div>
          <form class="form-group your-name" [formGroup]="signupForm">
              <span class="input-group-text">😀</span>
              <input type="text" class="form-control text-box-input" id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="your name"
                     formControlName="name">
          </form>
          <button type="button" class="btn btn-primary" [disabled]="!signupForm.valid">Next</button>
          <button type="button" class="btn btn-primary">Back to Home Page</button>
      </div>
  `,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm = new FormGroup({
    name: new FormControl(null, Validators.required)
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

}
