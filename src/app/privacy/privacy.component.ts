import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PrivacyService } from './privacy.service';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyComponent implements OnInit {
  loading = false;
  id = null;

  constructor(public router: Router, public privacyService: PrivacyService) { }

  ngOnInit() {
  }
  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
  onPrivacy(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.privacyService.onPrivacy(this.id, form.value.read, form.value.accept);
    form.resetForm();


  }

}
