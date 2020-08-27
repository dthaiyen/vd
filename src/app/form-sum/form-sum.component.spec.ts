import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSumComponent } from './form-sum.component';

describe('FormSumComponent', () => {
  let component: FormSumComponent;
  let fixture: ComponentFixture<FormSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
