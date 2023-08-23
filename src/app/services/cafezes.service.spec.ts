import { TestBed } from '@angular/core/testing';

import { CafezesService } from './cafezes.service';

describe('CafezesService', () => {
  let service: CafezesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafezesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
