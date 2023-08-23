import { TestBed } from '@angular/core/testing';

import { BeterrabasService } from './beterrabas.service';

describe('BeterrabasService', () => {
  let service: BeterrabasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeterrabasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
