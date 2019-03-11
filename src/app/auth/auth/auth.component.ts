import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loading = true ;
  constructor() { }
  ngOnInit() {
    setTimeout(() => this.loading = false, 1000);
  }
}
