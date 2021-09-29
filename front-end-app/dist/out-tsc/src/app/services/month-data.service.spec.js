import { TestBed } from '@angular/core/testing';
import { MonthDataService } from './month-data.service';
describe('MonthDataService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MonthDataService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=month-data.service.spec.js.map