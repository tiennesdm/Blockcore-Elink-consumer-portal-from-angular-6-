import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congs',
  templateUrl: './congs.component.html',
  styleUrls: ['./congs.component.css']
})
export class CongsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 5000);
  }

}
