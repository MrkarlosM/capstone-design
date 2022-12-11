import { TestBed } from '@angular/core/testing';

import { DocentesService } from './docentes.service';

describe('UsersService', () => {
  let service: DocentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
