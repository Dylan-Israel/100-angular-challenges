import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDocumentationComponent } from './service-documentation.component';

describe('ServiceDocumentationComponent', () => {
  let component: ServiceDocumentationComponent;
  let fixture: ComponentFixture<ServiceDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
