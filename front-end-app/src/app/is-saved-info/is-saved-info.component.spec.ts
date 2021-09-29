import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsSavedInfoComponent } from './is-saved-info.component';

describe('IsSavedInfoComponent', () => {
  let component: IsSavedInfoComponent;
  let fixture: ComponentFixture<IsSavedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsSavedInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsSavedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
