import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TermsService } from './terms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsComponent implements OnInit {
loading = false;
id = null ;
  constructor( public termsService: TermsService ) { }
  ngOnInit() {
  }
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }
  onTerms(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.termsService.addTerm(this.id, form.value.terms);
    form.resetForm();

  }


}
