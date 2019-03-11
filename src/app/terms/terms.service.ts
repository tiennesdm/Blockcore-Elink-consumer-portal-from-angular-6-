import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Terms } from './terms.model';

@Injectable({
  providedIn: 'root'
})
export class TermsService {
  private terms: Terms[] = [];


  constructor(private router: Router, private http: HttpClient) { }
  addTerm(id: null , terms: boolean ) {
    const term: Terms = {id: null , terms: terms};
    console.log(term);
    this.router.navigate(['/privacy']);
    this.http.post<{ message: string }>('http://localhost:3000/api/term', terms)
    .subscribe(responseData => {
      console.log(responseData.message);
      this.terms.push(term);
  });
}
}
