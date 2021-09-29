import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { IsSavedAllDataComponent } from './is-saved-all-data.component';
describe('IsSavedAllDataComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [IsSavedAllDataComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(IsSavedAllDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=is-saved-all-data.component.spec.js.map