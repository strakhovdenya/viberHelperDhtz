import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { Datepiker } from './datepiker.component';
describe('DatepikerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [Datepiker]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(Datepiker);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=datepiker.component.spec.js.map