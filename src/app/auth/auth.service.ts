import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { MobileAuth } from './mobile.model';
import { RegisterData } from './register.model';
import {  MobileOtp } from './otp.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private terms: RegisterData[] = [];
  private mobileotp: MobileOtp[] = [];
  private isAuthenticated = false;
  private ismobileauth = false;
  private token: string;
  private mobiletokens: string;
  private tokenTimer: any;
  private mobiletokenTimer: any;
  private mobilenumberbyotp;
  private mobileauth: MobileAuth[] = [];
  private authStatusListener = new Subject<boolean>();
  private mobileStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}
  onOtp(mobile: number) {
    const mobileData: MobileAuth = { mobile: mobile };

    console.log(mobileData);
    /*this.router.navigate(['/register']); */
    this.http
    .post<{ token: string; expiresIn: number }>(
      'http://localhost:3000/api/user/mobileauth',
      mobileData
    )
    .subscribe(response => {
      const mobiletoken = response.token;
      this.mobiletokens = mobiletoken;
      if (mobiletoken) {
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.ismobileauth = true;
        this.mobileStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        console.log(expirationDate);
        this.saveAuthData(mobiletoken, expirationDate);
        this.router.navigate(['/register']);
      }
    }, error => {
      this.mobileStatusListener.next(false);
    });
  }
  onRegister(id: null , email: string, mobile: number ,
     password: string, repeatpassword: string,
      firstname: string, surname: string, country: string ) {
        this.mobilenumberbyotp = mobile;
        console.log(this.mobilenumberbyotp);

    const register: RegisterData = {id: null ,
      email: email,
      mobile: mobile,
      password: password ,
      repeatpassword: repeatpassword ,
      firstname: firstname,
    surname: surname,
    country: country
  };
    console.log(register);
    console.log(register.mobile);
    this.router.navigate(['/mobile']);
  }
  onresendotp() {
    console.log(this.mobilenumberbyotp);
    /*this.router.navigate(['/terms']); */
  }
  onregisterdotp(otp: number) {
    const Getotp: MobileOtp = { otp: otp
    };
    console.log(Getotp);
    this.router.navigate(['/terms']);
  }
  getmobile() {
    return this.mobiletokens;
  }
  getismobileauthlistner() {
    return this.mobileStatusListener.asObservable();
  }
  getismobileauth() {
    return this.ismobileauth;

  }
  private clearmobileData() {
    localStorage.removeItem('mobiletoken');
    localStorage.removeItem('expiration');
  }
  mobilelogout() {
    this.mobiletokens = null;
    this.ismobileauth = false;
    this.mobileStatusListener.next(false);
    clearTimeout(this.mobiletokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    console.log(authData);
    this.router.navigate(['/register']);
    this.http
      .post<{ token: string; expiresIn: number }>(
        'http://localhost:3000/api/user/login',
        authData
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate);
          this.router.navigate(['/register']);
        }
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private setAuthTimer(duration: number) {
    console.log('Setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    };
  }
}
