import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardInputComponent } from './credit-card-input.component';

describe('CreditCardInputComponent', () => {
  let component: CreditCardInputComponent;
  let fixture: ComponentFixture<CreditCardInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
