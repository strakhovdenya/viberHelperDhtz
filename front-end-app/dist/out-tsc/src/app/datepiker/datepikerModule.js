import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from '../material/material.module';
import { Datepiker } from './datepiker.component';
import { MomentPipe } from "../services/moment.pipe";
// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
let DatepikerModule = class DatepikerModule {
};
DatepikerModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            HttpClientModule,
            MatNativeDateModule,
            ReactiveFormsModule,
            MaterialModule,
        ],
        declarations: [Datepiker, MomentPipe],
        bootstrap: [Datepiker],
        exports: [Datepiker],
        providers: [
            { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
        ]
    })
], DatepikerModule);
export { DatepikerModule };
//# sourceMappingURL=datepikerModule.js.map