import { TestBed, async, inject } from '@angular/core/testing';

import { MobileauthGuard } from './mobileauth.guard';

describe('MobileauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileauthGuard]
    });
  });

  it('should ...', inject([MobileauthGuard], (guard: MobileauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
