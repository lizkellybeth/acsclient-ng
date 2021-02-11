import { TestBed } from '@angular/core/testing';
import { AcsStatusService } from './acs-status.service';

describe('AcsStatusService', () => {
  let service: AcsStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcsStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
