import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { Input } from '@angular/core';

@Component({
  selector: 'app-mobile-login',
  templateUrl: './mobile-login.component.html',
  styleUrls: ['./mobile-login.component.css']
})
export class MobileLoginComponent implements OnInit {
  @Input() locale;
  @Input() defaultCountry;
  @Input() onlyNumbers;
  default;
  loading = false;
loop = false;
hidden = true ;
title = '' ;
message = '' ;
messageprint = false;
mobilenumber;
timestamp;
private authStatusSub: Subscription;

  constructor(public authService: AuthService, ) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getismobileauthlistner().subscribe(
      authStatus => {
        this.loading = true;
      }
    );
  }

  onMobilelogin(f: NgForm) {
    if (f.invalid) {
return null ;
    }
    this.mobilenumber = f.value.mobile;
    console.log(f.value);
    console.log(f.valid);  // false
    this.authService.onOtp(this.mobilenumber);
    this.hidden = false;
  }
  onOtp( f: NgForm) {
    console.log( f.value.otp );
  }
  onStart() {
  }
  onFinished() {
    this.loop = true;
    this.title = 'RESEND';
    console.log(this.title);
  }
 phoneotp() {
   console.log('click is function working');
   this.messageprint = true;
   this.message = ' Otp has been sent again  ';
   console.log(this.message);
   this.authService.onOtp(this.mobilenumber);
 }

}
