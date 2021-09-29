import { TestBed } from '@angular/core/testing';
import { IsSavedCheckerService } from './is-saved-checker.service';
describe('IsSavedCheckerService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(IsSavedCheckerService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=is-saved-checker.service.spec.js.map