import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreTripPage } from './pre-trip.page';

describe('PreTripPage', () => {
  let component: PreTripPage;
  let fixture: ComponentFixture<PreTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreTripPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
