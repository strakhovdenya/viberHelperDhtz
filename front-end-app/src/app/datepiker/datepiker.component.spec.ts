import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datepiker } from './datepiker.component';

describe('DatepikerComponent', () => {
  let component: Datepiker;
  let fixture: ComponentFixture<Datepiker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Datepiker ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Datepiker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
