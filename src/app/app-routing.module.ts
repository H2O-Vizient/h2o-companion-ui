import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from './landing-page/sign-in/sign-in.component';
import {SignUpComponent} from './landing-page/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './landing-page/forgot-password/forgot-password.component';
import {UpdatePasswordComponent} from './landing-page/update-password/update-password.component';
import {EventsComponent} from './events/events.component';
import {UserEventsComponent} from './events/user-events/user-events.component';
import {AllEventsComponent} from './events/all-events/all-events.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'update-password', component: UpdatePasswordComponent},
  {path: 'events', component: EventsComponent, children: [
      {path: 'user-events', component: UserEventsComponent},
      {path: 'all-events', component: AllEventsComponent}
    ]},
  {path: 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
