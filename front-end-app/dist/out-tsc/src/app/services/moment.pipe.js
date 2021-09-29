import { __decorate } from "tslib";
import { Pipe } from "@angular/core";
let MomentPipe = class MomentPipe {
    transform(m, format = 'MM/YYYY') {
        return m.format(format);
    }
};
MomentPipe = __decorate([
    Pipe({
        name: 'moment',
        pure: false
    })
], MomentPipe);
export { MomentPipe };
//# sourceMappingURL=moment.pipe.js.map