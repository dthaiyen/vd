import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputABComponent } from './input-ab.component';

describe('InputABComponent', () => {
  let component: InputABComponent;
  let fixture: ComponentFixture<InputABComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputABComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
