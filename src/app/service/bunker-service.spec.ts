import { TestBed } from '@angular/core/testing';

import { BunkerService } from './bunker-service';

describe('BunkerService', () => {
  let service: BunkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BunkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
