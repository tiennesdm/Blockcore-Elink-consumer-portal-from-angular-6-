import { Component, OnInit } from '@angular/core';
import { DISABLED } from '@angular/forms/src/model';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
loading = false ;
button = false ;
title = '';
lefttime = '';
message = '';
constructor(public authService: AuthService) { }
  ngOnInit() {
  }
  onStart() {
  }
  onFinished() {
    this.title = 'RESEND';
    this.button = true;
    console.log(this.title);



  }
  onOtp(f: NgForm) {
    if (f.invalid) {
      return null ;
          }
          this.authService.onregisterdotp(f.value.otp);



  }
 phone() {
   console.log('click is function working');
   this.message = 'We sent an otp ';
   this.authService.onresendotp();
 }

}
