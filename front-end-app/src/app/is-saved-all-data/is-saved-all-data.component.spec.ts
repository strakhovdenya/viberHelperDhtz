import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsSavedAllDataComponent } from './is-saved-all-data.component';

describe('IsSavedAllDataComponent', () => {
  let component: IsSavedAllDataComponent;
  let fixture: ComponentFixture<IsSavedAllDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsSavedAllDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsSavedAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
