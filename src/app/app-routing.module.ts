import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileLoginComponent } from './auth/mobile-login/mobile-login.component';
import { AccountLoginComponent } from './auth/account-login/account-login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CongsComponent } from './congs/congs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerComponent } from './partner/partner.component';
import { OtpComponent } from './auth/otp/otp.component';
import { AuthComponent } from './auth/auth/auth.component';
import { PasswordComponent } from './auth/password/password.component';
import { Otp2Component } from './auth/otp2/otp2.component';
const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'mobile', component: OtpComponent },

  { path: 'Otp', component: Otp2Component },
  { path: 'congs', component: CongsComponent },
  { path: 'dashboard', component: DashboardComponent },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes , {useHash: true})
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
