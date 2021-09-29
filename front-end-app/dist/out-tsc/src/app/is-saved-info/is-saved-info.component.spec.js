import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { IsSavedInfoComponent } from './is-saved-info.component';
describe('IsSavedInfoComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [IsSavedInfoComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(IsSavedInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=is-saved-info.component.spec.js.map