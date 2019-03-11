import { BrowserModule } from '@angular/platform-browser';
import { ChangeDetectionStrategy, NgModule , ModuleWithProviders} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';
import { FormsModule } from '@angular/forms';
import { NbSidebarModule, NbLayoutModule, NbSidebarService , NbCardModule, NbCheckboxModule , NbSpinnerModule,  } from '@nebular/theme';
import { NbTabsetModule } from '@nebular/theme';
import { MobileLoginComponent } from './auth/mobile-login/mobile-login.component';
import { AccountLoginComponent } from './auth/account-login/account-login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CongsComponent } from './congs/congs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerComponent } from './partner/partner.component';
import { OtpComponent } from './auth/otp/otp.component';
import { BsDropdownModule,  } from 'ngx-bootstrap/dropdown';
import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth/auth.component';
import { PasswordComponent } from './auth/password/password.component';
import { Otp2Component } from './auth/otp2/otp2.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileLoginComponent,
    AccountLoginComponent,
    RegisterComponent,
    TermsComponent,
    PrivacyComponent,
    CongsComponent,
    DashboardComponent,
    PartnerComponent,
    OtpComponent,
    AuthComponent,
    PasswordComponent,
    Otp2Component,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NbLayoutModule,
    NbSidebarModule,
    Ng2TelInputModule,
    NbCardModule,
    NbCheckboxModule,
    NbSpinnerModule,
    HttpClientModule,
    NbTabsetModule,
    FormsModule,
    CountdownModule,
    InternationalPhoneNumberModule,
    InternationalPhoneModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([  ]), // Router is required by Nebular
    NbThemeModule.forRoot({ name: 'default' }),
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
