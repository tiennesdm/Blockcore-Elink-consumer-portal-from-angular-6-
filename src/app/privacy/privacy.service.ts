import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Privacy } from './privacy.model';

@Injectable({
  providedIn: 'root'
})
export class PrivacyService {
  private privacy: Privacy[] = [];

  constructor(private router: Router , private http: HttpClient) { }
  onPrivacy(id: null , read: boolean, accept: boolean ) {
    const privacys: Privacy = {id: null , read: read, accept: accept};
    console.log(privacys);
    this.router.navigate(['/congs']);
    this.http.post<{ message: string }>('http://localhost:3000/api/privacy', privacys)
    .subscribe(responseData => {
      console.log(responseData.message);
      this.privacy.push(privacys);
  });
}
}
