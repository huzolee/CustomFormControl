import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericFormControlComponent } from './numeric-form-control.component';

describe('NumericFormControlComponent', () => {
  let component: NumericFormControlComponent;
  let fixture: ComponentFixture<NumericFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
