import { TestBed } from '@angular/core/testing';

import { TableDataGeneratorService } from './table-data-generator.service';

describe('TableDataGeneratorService', () => {
  let service: TableDataGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableDataGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
