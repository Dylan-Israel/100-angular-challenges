import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDocumentationComponent } from './other-documentation.component';

describe('OtherDocumentationComponent', () => {
  let component: OtherDocumentationComponent;
  let fixture: ComponentFixture<OtherDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
