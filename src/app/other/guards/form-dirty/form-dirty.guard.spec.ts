import { TestBed } from '@angular/core/testing';

import { FormDirtyGuard } from './form-dirty.guard';

describe('FormDirtyGuard', () => {
  let guard: FormDirtyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FormDirtyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
