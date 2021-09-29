import { TestBed } from '@angular/core/testing';
import { CheckFormService } from './check-form.service';
describe('CheckFormService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CheckFormService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=check-form.service.spec.js.map