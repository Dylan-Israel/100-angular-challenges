import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextViewerComponent } from './rich-text-viewer.component';

describe('RichTextViewerComponent', () => {
  let component: RichTextViewerComponent;
  let fixture: ComponentFixture<RichTextViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichTextViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
