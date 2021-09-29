import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { TextMaskModule } from 'angular2-text-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { SheduleYangerComponent } from './sheduleYanger/shedule-yanger.component';
import { SheduleElderComponent } from './shedule-elder/shedule-elder.component';
import { MonthsComponent } from './monthes/months.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { CheckFormService } from './services/check-form.service';
import { MonthDataService } from './services/month-data.service';
import { IsSavedCheckerService } from './services/is-saved-checker.service';
import { AuthService } from './services/auth.service';
import { IsLoggedIn } from './services/isLogged.guard';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { MaterialModule } from './material/material.module';
import { TableModule } from './table/table.module';
import { DatepikerModule } from './datepiker/datepikerModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonSaveScheduleComponent } from './button-save-schedule/button-save-schedule.component';
import { IsSavedInfoComponent } from './is-saved-info/is-saved-info.component';
import { IsSavedAllDataComponent } from './is-saved-all-data/is-saved-all-data.component';
import { DateService } from "./services/date.service";
const DashboardRoute = [
    { path: '', component: HomeComponent },
    { path: 'juniors', component: SheduleYangerComponent },
    { path: 'elders', component: SheduleElderComponent },
    { path: 'month', component: MonthsComponent },
    { path: 'menu_settings', component: DashboardComponent, canActivate: [IsLoggedIn] },
];
const appRoute = [
    { path: '', component: HomeComponent },
    { path: 'reg', component: RegComponent },
    { path: 'auth', component: AuthComponent },
    // {path: 'dashboard', component: DashboardComponent, canActivate:[IsLoggedIn]},
    { path: 'dashboard', component: DashboardComponent, canActivate: [IsLoggedIn], children: DashboardRoute },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            RegComponent,
            AuthComponent,
            DashboardComponent,
            HomeComponent,
            FooterComponent,
            SheduleYangerComponent,
            ButtonSaveScheduleComponent,
            IsSavedInfoComponent,
            SheduleElderComponent,
            IsSavedAllDataComponent,
            MonthsComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            RouterModule.forRoot(appRoute),
            FormsModule,
            FlashMessagesModule.forRoot(),
            HttpClientModule,
            MaterialModule,
            DatepikerModule,
            TableModule,
            BrowserAnimationsModule
            // TextMaskModule
        ],
        providers: [
            DateService,
            IsSavedCheckerService,
            MonthDataService,
            CheckFormService,
            AuthService,
            IsLoggedIn,
            { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
            JwtHelperService
        ],
        exports: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map