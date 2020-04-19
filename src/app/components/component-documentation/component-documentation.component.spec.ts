import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDocumentationComponent } from './component-documentation.component';

describe('ComponentDocumentationComponent', () => {
  let component: ComponentDocumentationComponent;
  let fixture: ComponentFixture<ComponentDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
