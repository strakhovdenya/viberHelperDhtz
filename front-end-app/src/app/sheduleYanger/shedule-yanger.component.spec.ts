import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleYangerComponent } from './shedule-yanger.component';

describe('MainComponent', () => {
  let component: SheduleYangerComponent;
  let fixture: ComponentFixture<SheduleYangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheduleYangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleYangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
