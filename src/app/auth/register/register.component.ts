import { Component, OnInit, Input } from '@angular/core';
import { NgForm, ValidationErrors, Validator } from '@angular/forms';
import { AuthService} from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() defaultCountry;
 loading = '';
 id = null ;
password = '';
repeat = '';
message = '';
  constructor(public authservice: AuthService) { }

  ngOnInit() {
  }
  onRegister(f: NgForm) {
    if (f.invalid) {
      return null;
    }
    console.log(f.value);
    console.log(f.value.country);
    if (f.value.password === f.value.repeat) {
      this.authservice.onRegister(this.id,
        f.value.email,
         f.value.phone,
         f.value.password,
          f.value.repeat,
           f.value.firstname,
            f.value.surname,
            f.value.country
            );
            f.resetForm();
    }
    this.message = 'Password doesnt match' ;

    }
  }
