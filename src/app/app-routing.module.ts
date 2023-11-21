import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from './landing-page/sign-in/sign-in.component';
import {SignUpComponent} from './landing-page/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './landing-page/forgot-password/forgot-password.component';
import {UpdatePasswordComponent} from './landing-page/update-password/update-password.component';

const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'update-password', component: UpdatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
