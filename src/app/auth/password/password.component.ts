import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onPassword( f: NgForm) {
    console.log(f.value);


  }

}
