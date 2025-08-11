import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { firsguardGuard } from './firsguard.guard';

describe('firsguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => firsguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
