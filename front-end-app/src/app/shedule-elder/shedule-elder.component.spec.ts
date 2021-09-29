import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleElderComponent } from './shedule-elder.component';

describe('SheduleElderComponent', () => {
  let component: SheduleElderComponent;
  let fixture: ComponentFixture<SheduleElderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheduleElderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleElderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
