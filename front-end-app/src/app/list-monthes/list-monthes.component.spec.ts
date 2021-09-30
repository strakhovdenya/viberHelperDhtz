import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMonthesComponent } from './list-monthes.component';

describe('ListMonthesComponent', () => {
  let component: ListMonthesComponent;
  let fixture: ComponentFixture<ListMonthesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMonthesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMonthesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
