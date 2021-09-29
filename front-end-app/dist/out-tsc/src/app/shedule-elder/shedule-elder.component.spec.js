import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { SheduleElderComponent } from './shedule-elder.component';
describe('SheduleElderComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [SheduleElderComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SheduleElderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=shedule-elder.component.spec.js.map