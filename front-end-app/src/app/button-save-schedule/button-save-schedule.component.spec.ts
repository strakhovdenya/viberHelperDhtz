import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSaveScheduleComponent } from './button-save-schedule.component';

describe('ButtonSaveScheduleComponent', () => {
  let component: ButtonSaveScheduleComponent;
  let fixture: ComponentFixture<ButtonSaveScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSaveScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSaveScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
