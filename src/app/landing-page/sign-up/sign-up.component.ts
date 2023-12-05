import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpRequest} from '../../models/sign-up-request';
import {matchValidator} from '../../utils/confirm-password.validator';
import {SupabaseService} from "../../services/supabase.service";
import {SignInRequest} from "../../models/sign-in-request";

@Component({
  // TODO:
  //   - finish template --- TEMPORARY TEMPLATE DONE
  //   - fix form tags
  //   - wire sign up button --- DONE (but could use some work in the future)
  //   - add custom validators based on sign up stage --- DONE (but could use some work in the future)

  selector: 'app-sign-up',
  template: `
      <!--    commenting out the template work until we can come up with a good way to handle profile properties -->
      <!--    <div class="sign-up-container">-->
      <!--      <div class="step-one" *ngIf="signupStage === 0">-->
      <!--        <div class="text">-->
      <!--          Are you signing up for a new Volunteer account? Let's get started!-->
      <!--        </div>-->
      <!--        <div class="text">First, what's your name?</div>-->
      <!--        <form class="form-group your-name" [formGroup]="signupForm">-->
      <!--          <span class="input-group-text">😀</span>-->
      <!--          <input type="text" class="form-control text-box-input"-->
      <!--                 placeholder="your name"-->
      <!--                 formControlName="name">-->
      <!--        </form>-->
      <!--      </div>-->
      <!--      <div class="step-two" *ngIf="signupStage === 1">-->
      <!--        <div class="text">And your email address?</div>-->
      <!--        <form class="form-group your-name" [formGroup]="signupForm">-->
      <!--          <span class="input-group-text">✉</span>-->
      <!--          <input type="text" class="form-control text-box-input"-->
      <!--                 placeholder="email address"-->
      <!--                 formControlName="email">-->
      <!--        <mat-checkbox formControlName="addToMailingList">Add me to the mailing list</mat-checkbox>-->
      <!--        </form>-->
      <!--      </div>-->
      <!--      <div class="step-two" *ngIf="signupStage === 2">-->
      <!--        <div class="text">Now's a good time to set a password; don't forget it!</div>-->
      <!--        <div class="text">Passwords must be at least 10 characters and include a number.</div>-->
      <!--        <form class="form-group your-name" [formGroup]="signupForm">-->
      <!--          <span class="input-group-text">🔒</span>-->
      <!--          <input type="text" class="form-control text-box-input"-->
      <!--                 placeholder="password"-->
      <!--                 formControlName="password">-->
      <!--          <input type="text" class="form-control text-box-input"-->
      <!--                 placeholder="password"-->
      <!--                 formControlName="passwordConfirmation">-->
      <!--        </form>-->
      <!--      </div>-->
      <!--      <div class="step-two" *ngIf="signupStage === 3">-->
      <!--        <div class="text">At what phone number may we reach you?</div>-->
      <!--        <form class="form-group your-name" [formGroup]="signupForm">-->
      <!--          <span class="input-group-text">📱</span>-->
      <!--          <input type="text" class="form-control text-box-input"-->
      <!--                 placeholder="phone number"-->
      <!--                 formControlName="phoneNumber">-->
      <!--        </form>-->
      <!--      </div>-->
      <!--      <div class="step-two" *ngIf="signupStage === 4">-->
      <!--        <div class="text">When is your birthday?</div>-->
      <!--        <form class="form-group your-name" [formGroup]="signupForm">-->
      <!--          <span class="input-group-text">📅</span>-->
      <!--          <input type="date" class="form-control text-box-input"-->
      <!--                 placeholder="mm/dd/yyyy"-->
      <!--                 formControlName="birthday">-->
      <!--        </form>-->
      <!--      </div>-->
      <!--      <div class="step-two" *ngIf="signupStage === 5">-->
      <!--        <div class="text">What organizations are you affiliated with?</div>-->
      <!--        <form class="form-group your-name" [formGroup]="signupForm">-->
      <!--          <span class="input-group-text">🏢</span>-->
      <!--          <input type="text" class="form-control text-box-input"-->
      <!--                 placeholder="affiliation"-->
      <!--                 formControlName="affiliations">-->
      <!--          <button type="button" class="btn btn-primary" (click)="addAffilitation()">Add</button>-->
      <!--          <div class="selected-groups">-->
      <!--            <div *ngIf="signUpRequest.affiliations.length === 0; else selectedGroup">-->
      <!--              <p class="no-selected-group">No groups selected</p>-->
      <!--            </div>-->
      <!--            <ng-template #selectedGroup>-->
      <!--              <div class="selected-group" *ngFor="let group of signUpRequest.affiliations">-->
      <!--                {{group}}-->
      <!--              </div>-->
      <!--            </ng-template>-->
      <!--          </div>-->
      <!--        </form>-->
      <!--      </div>-->
      <!--      <div class="step-two" *ngIf="signupStage === 6">-->
      <!--        <div class="text">-->
      <!--          Do you have anything you'd like to say about yourself? This is public information,-->
      <!--          shared with other volunteers just like you!-->
      <!--        </div>-->
      <!--        <form class="form-group your-name" [formGroup]="signupForm">-->
      <!--          <span class="input-group-text">📝</span>-->
      <!--          <textarea type="text" class="form-control text-box-input"-->
      <!--                    placeholder="Add text"-->
      <!--                    formControlName="publicBio">-->
      <!--          </textarea>-->
      <!--        </form>-->
      <!--      </div>-->
      <!--      <button type="button" class="btn btn-primary" [disabled]="!signupForm.valid" (click)="advanceSignupStage()">-->
      <!--        Next-->
      <!--      </button>-->
      <!--      <button type="button" class="btn btn-primary"-->
      <!--              [routerLink]="''">{{signupStage > 0 ? 'Back' : 'Back to Home Page'}}</button>-->
      <!--    </div>-->

      <!--    temporary sign up template -->
      <div class="sign-up-container">
          <form class="sign-up-form" [formGroup]="signupForm">
              <div class="input-container">
                  <span class="input-group-text">✉</span>
                  <mat-form-field class="email-input">
                      <mat-label>Enter your email address</mat-label>
                      <input matInput type="email" formControlName="email">
                      <mat-error *ngIf="signupForm.invalid && signupForm.touched">{{getErrorMessage()}}</mat-error>
                  </mat-form-field>
              </div>
              <div class="input-container">
                  <span class="input-group-text">🔒</span>
                  <mat-form-field class="password-input">
                      <mat-label>Enter your password</mat-label>
                      <input matInput [type]="password1 ? 'password' : 'text'" formControlName="password">
                      <button mat-icon-button matSuffix class="hide-icon" (click)="password1 = !password1"
                              [attr.aria-label]="'Hide password'" [attr.aria-pressed]="password1">
                          <mat-icon>{{password1 ? 'visibility_off' : 'visibility'}}</mat-icon>
                      </button>
                    <mat-error *ngIf="signupForm.invalid && signupForm.touched">{{getErrorMessage()}}</mat-error>
                  </mat-form-field>
              </div>
              <div class="input-container">
                  <span class="input-group-text">🔒</span>
                  <mat-form-field class="password-input">
                      <mat-label>Confirm your password</mat-label>
                      <input matInput [type]="password2 ? 'password' : 'text'" formControlName="passwordConfirmed">
                      <button mat-icon-button matSuffix class="hide-icon" (click)="password2 = !password2"
                              [attr.aria-label]="'Hide password'" [attr.aria-pressed]="password2">
                          <mat-icon>{{password2 ? 'visibility_off' : 'visibility'}}</mat-icon>
                      </button>
                    <mat-error *ngIf="signupForm.invalid && signupForm.touched">{{getErrorMessage()}}</mat-error>
                  </mat-form-field>
              </div>
              <div class="button-container">
                  <button type="button" class="btn btn-primary" [routerLink]="''">Cancel</button>
                  <button type="button" class="btn btn-primary" [disabled]="!signupForm.valid" (click)="onSignUp()">
                      Sign Up
                  </button>
              </div>
          </form>
      </div>
  `,
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signupForm: FormGroup = new FormGroup({
    name: new FormControl(null),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, matchValidator('passwordConfirmed', true)]),
    passwordConfirmed: new FormControl(null, [Validators.required, matchValidator('password')]),
    phoneNumber: new FormControl(null),
    birthday: new FormControl(null),
    affiliations: new FormControl(null),
    publicBio: new FormControl(null),
    addToMailingList: new FormControl(false),
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
    phoneNumber: '',
    publicBio: '',
    volunteerId: ''
  };
  password1 = true;
  password2 = true;

  constructor(private readonly supabaseService: SupabaseService) {
  }

  onSignUp() {
    const request: SignUpRequest = {
      email: this.signupForm.get('email')?.value,
      password: this.signupForm.value.password,
    }

    this.supabaseService.signUp(request)
  }

  advanceSignupStage() {
    if (this.signupStage < 6) {
      return this.signupStage++
    } else {
      return;
    }
  }

  getErrorMessage() {
    if (this.signupForm.get('email')?.hasError('email')) {
      return 'Not a valid email';
    } else if (this.signupForm.get('passwordConfirmed')?.hasError('matching')) {
      return 'Passwords must match';
    }

    return 'You must enter a value';
  }

  // addAffilitation() {
  //   if (this.signupForm.value.affiliations) {
  //     this.signUpRequest.affiliations.push(this.signupForm.value.affiliations)
  //     this.signupForm.value.affiliations = null
  //   }
  // }

}
