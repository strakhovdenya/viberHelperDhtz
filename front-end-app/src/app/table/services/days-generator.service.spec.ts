import { TestBed } from '@angular/core/testing';

import { DaysGeneratorService } from './days-generator.service';

describe('DaysGeneratorService', () => {
  let service: DaysGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaysGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
