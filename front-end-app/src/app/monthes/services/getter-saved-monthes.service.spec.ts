import { TestBed } from '@angular/core/testing';

import { GetterSavedMonthesService } from './getter-saved-monthes.service';

describe('GetterSavedMonthesService', () => {
  let service: GetterSavedMonthesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetterSavedMonthesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
