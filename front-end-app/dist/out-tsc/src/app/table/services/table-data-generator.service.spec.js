import { TestBed } from '@angular/core/testing';
import { TableDataGeneratorService } from './table-data-generator.service';
describe('TableDataGeneratorService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TableDataGeneratorService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=table-data-generator.service.spec.js.map