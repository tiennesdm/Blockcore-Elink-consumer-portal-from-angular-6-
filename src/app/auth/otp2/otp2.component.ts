import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-otp2',
  templateUrl: './otp2.component.html',
  styleUrls: ['./otp2.component.css']
})
export class Otp2Component implements OnInit {
  finishDate  =  'October 18, 2019 00:33';
  seconds = '';

  constructor() { }

  ngOnInit() {

  }
  onSecondsChanged(seconds) {
    this.seconds  =  seconds;
    }

}
