import { TestBed } from '@angular/core/testing';

import { AfireService } from './afire.service';

describe('AfireService', () => {
  let service: AfireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
