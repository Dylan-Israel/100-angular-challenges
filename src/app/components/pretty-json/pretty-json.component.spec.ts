import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyJsonComponent } from './pretty-json.component';

describe('PrettyJsonComponent', () => {
  let component: PrettyJsonComponent;
  let fixture: ComponentFixture<PrettyJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettyJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettyJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
