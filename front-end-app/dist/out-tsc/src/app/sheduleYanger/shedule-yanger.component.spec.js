import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { SheduleYangerComponent } from './shedule-yanger.component';
describe('MainComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [SheduleYangerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SheduleYangerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=shedule-yanger.component.spec.js.map