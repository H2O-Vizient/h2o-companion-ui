import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignInComponent} from './landing-page/sign-in/sign-in.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SignUpComponent} from './landing-page/sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ForgotPasswordComponent} from './landing-page/forgot-password/forgot-password.component';
import {UpdatePasswordComponent} from './landing-page/update-password/update-password.component';
import {MatButtonModule} from '@angular/material/button';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {EventsComponent} from './events/events.component';
import {AllEventsComponent} from './events/all-events/all-events.component';
import {UserEventsComponent} from './events/user-events/user-events.component';
import {MatSelectModule} from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {EventsRoutingService} from './services/events-routing.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {UserProfileComponent} from './user-profile/user-profile.component';

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        UpdatePasswordComponent,
        FooterComponent,
        HeaderComponent,
        EventsComponent,
        AllEventsComponent,
        UserEventsComponent,
        UserProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        MatIconModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatSnackBarModule
    ],
    providers: [EventsRoutingService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
