import { TestBed } from '@angular/core/testing';
import { DaysGeneratorService } from './days-generator.service';
describe('DaysGeneratorService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DaysGeneratorService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=days-generator.service.spec.js.map