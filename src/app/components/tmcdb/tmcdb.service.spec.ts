import { TestBed } from '@angular/core/testing';

import { TmcdbService } from '../../tmcdb.service';

describe('TmcdbService', () => {
  let service: TmcdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmcdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
