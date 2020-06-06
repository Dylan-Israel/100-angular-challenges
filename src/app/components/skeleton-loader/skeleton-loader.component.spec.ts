import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoaderComponent } from './skeleton-loader.component';

describe('SkeletonLoaderComponent', () => {
  let component: SkeletonLoaderComponent;
  let fixture: ComponentFixture<SkeletonLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
