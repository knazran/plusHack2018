import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTripPage } from './plan-trip.page';

describe('PlanTripPage', () => {
  let component: PlanTripPage;
  let fixture: ComponentFixture<PlanTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanTripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
