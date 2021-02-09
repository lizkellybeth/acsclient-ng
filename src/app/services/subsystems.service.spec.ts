import { TestBed } from '@angular/core/testing';

import { SubsystemsService } from './subsystems.service';

describe('SubsystemsService', () => {
  let service: SubsystemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsystemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
