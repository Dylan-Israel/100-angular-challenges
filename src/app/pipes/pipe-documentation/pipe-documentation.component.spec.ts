import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDocumentationComponent } from './pipe-documentation.component';

describe('PipeDocumentationComponent', () => {
  let component: PipeDocumentationComponent;
  let fixture: ComponentFixture<PipeDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
