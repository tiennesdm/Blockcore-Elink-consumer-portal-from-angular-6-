import { Component , OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit, OnDestroy {
  loading = false;
password = '' ;
email = '';
hidden = true ;
logindata = ' ' ;
private authStatusSub: Subscription;

  constructor( public authService: AuthService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.loading = true;
      }
    );
  }
  onAccountlogin(f: NgForm) {
    if (f.invalid) {
      return ;
    }
    if (f.valid)  {
    this.email = f.value.email ;
    }
    this.hidden = false;
      // false
  }
  onPassword( f: NgForm) {
    this.password = f.value.password;
    console.log(this.email);
    this.authService.login(this.email, this.password);
  }
  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}

