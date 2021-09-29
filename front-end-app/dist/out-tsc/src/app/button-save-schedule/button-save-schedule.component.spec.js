import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ButtonSaveScheduleComponent } from './button-save-schedule.component';
describe('ButtonSaveScheduleComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ButtonSaveScheduleComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonSaveScheduleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=button-save-schedule.component.spec.js.map