import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCutOutComponent } from './banner-cut-out.component';

describe('BannerCutOutComponent', () => {
  let component: BannerCutOutComponent;
  let fixture: ComponentFixture<BannerCutOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCutOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCutOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
