import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongsComponent } from './congs.component';

describe('CongsComponent', () => {
  let component: CongsComponent;
  let fixture: ComponentFixture<CongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
