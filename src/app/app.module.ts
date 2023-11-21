import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './landing-page/sign-in/sign-in.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ForgotPasswordComponent} from './landing-page/forgot-password/forgot-password.component';
import {UpdatePasswordComponent} from './landing-page/update-password/update-password.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    UpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
